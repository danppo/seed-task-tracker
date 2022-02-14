import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get register')
});

router.post('/', (req, res) => {
  res.send('post register')
});

export default router;
