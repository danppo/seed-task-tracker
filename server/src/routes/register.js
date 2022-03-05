import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User, { Record } from '../schema';

mongoose.connect(process.env.MONGODB);

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Not Accessable')
});

router.post('/', async (req, res) => {
  
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!(email && password && firstName && lastName)) {
      res.status(400).send({message: "All inputs are required"});
    }

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send({message: "User Already Exist. Please Login"});
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const record = await Record.create({
      user: email.toLowerCase(),
      displayName: firstName
    });

    const user = await User.create({
      firstName,
      lastName,
      email: email.toLowerCase(),
      password: encryptedPassword,
      recordId: record._id
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

    user.token = token;
    user.message = "Registration successful";
    // user.recordId = record._id;

    res.status(201).send(user);
  } catch (err) {
  }

});

export default router;
