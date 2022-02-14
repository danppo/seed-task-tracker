import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get login')
});

router.post('/', (req, res) => {
  res.send('post login')
});

export default router;
