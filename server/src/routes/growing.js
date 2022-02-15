import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get growing')
});

router.post('/', (req, res) => {
  res.send('post growing')
});

export default router;
