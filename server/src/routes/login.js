import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../schema';

mongoose.connect(process.env.MONGODB);

const router = express.Router();

router.post('/', async (req, res) => {

  try {
    const { email, password } = req.body;

    if (!(email && password )) {
      res.status(400).send({message: "All inputs are required"});
    }

    User.find({email: email.toLowerCase()}, (err, userArray) => {
        if (err) {
          res.status(400).send({message: err});
        }

        if (userArray.length > 0) {
          const user = userArray[0];
          bcrypt.compare(password, user.password, (err, match) => {
            if (err) {
              res.status(400).send({message: err});
            } else if (match) {

              const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                { expiresIn: "2h" }
              );

              res.send({message: "Log in success", token, firstName: user.firstName, lastName: user.lastName});
            } else {
              res.status(401).send({message: "Incorrect password"})
            }
          });
        } else {
          res.status(404).send({message: "User not found"});
        }
    });

  } catch (err) {
    res.status(500).send({message: err});
  }

});

export default router;
