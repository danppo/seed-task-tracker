import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import userSchema from '../schema';

mongoose.connect(process.env.MONGODB);

// const userSchema = mongoose.Schema({
//   userName: String,
//   email: String,
//   password: String
// });

const User = mongoose.model("User", userSchema ); // defines the catalogue to use 

const hashEnum = {
  SET: 'set',
  MATCH: 'match'
};

const passwordHash = async (password, action, savedHash) => {
  const saltRounds = 10;

  try {
    const hashPassword = await bcrypt.hash(password, saltRounds);

    if (action === hashEnum.SET) {
      return hashPassword;
    } else if (action === hashEnum.MATCH) {
      const isMatch = await bcrypt.compare(password, savedHash)
      return isMatch;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }

};




const router = express.Router();

router.get('/', (req, res) => {

  User.find({userName: 'test'}, (err, res) => {
    console.log(err);
    console.log(res);

  })
  res.send('Get register')
});



router.post('/', (req, res) => {
  
  if (!req.body.email || !req.body.userName || !req.body.password) {
    res.send('oops missing information')
  } else {
    passwordHash(req.body.password, hashEnum.SET)
      .then((hash) => {
        console.log(hash)
        const newUser = new User({
          userName: req.body.userName,
          email: req.body.email,
          password: hash
        });
        newUser.save((err, User) => {
          if (err) {
            res.send('oops server issue')
          } else {
            res.send(`new user added ${User}`)
          }
    
        });

      });

  }

  console.log(req.body)
  // res.send('post register')
});

export default router;
