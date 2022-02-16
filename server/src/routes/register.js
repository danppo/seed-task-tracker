import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../schema';

mongoose.connect(process.env.MONGODB);

// const userSchema = mongoose.Schema({
//   userName: String,
//   email: String,
//   password: String
// });

// const User = mongoose.model("User", userSchema ); // defines the catalogue to use 

// const hashEnum = {
//   SET: 'set',
//   MATCH: 'match'
// };

// const passwordHash = async (password, action, savedHash) => {
//   const saltRounds = 10;

//   try {
//     const hashPassword = await bcrypt.hash(password, saltRounds);

//     if (action === hashEnum.SET) {
//       return hashPassword;
//     } else if (action === hashEnum.MATCH) {
//       const isMatch = await bcrypt.compare(password, savedHash)
//       return isMatch;
//     } else {
//       return null;
//     }
//   } catch (error) {
//     console.log(error);
//   }

// };

const authenticateToken = (req, res , next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]
  if (token === null) return res.sendStatus(401)

  jwt.verify(token, process.env.TOKEN_KEY, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()

  })
}


const router = express.Router();

router.get('/', (req, res) => {

  // User.find({userName: 'test'}, (err, res) => {
  //   console.log(err);
  //   console.log(res);

  // })
  res.send('Get register')
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

    const user = await User.create({
      firstName,
      lastName,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

    user.token = token;
    user.message = "Registration successful"


    res.status(201).send(user);
  } catch (err) {
  }












  // if (!req.body.email || !req.body.firstName || !req.body.lastName || !req.body.password) {
  //   res.send('oops missing information')
  // } else {
  //   passwordHash(req.body.password, hashEnum.SET)
  //     .then((hash) => {
  //       console.log(hash)
  //       const newUser = new User({
  //         firstName: req.body.firstName,
  //         lastName: req.body.lastName,
  //         email: req.body.email,
  //         password: hash
  //       });
  //       newUser.save((err, User) => {
  //         if (err) {
  //           res.send(`oops server issue: ${err}`)
  //         } else {
  //           res.send(`new user added ${User}`)
  //         }
    
  //       });

  //     });

  // }

  // res.send('post register')
});

export default router;
