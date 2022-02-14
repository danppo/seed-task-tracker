import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get catalogue')
});

router.post('/', (req, res) => {
  res.send('post catalogue')
});

export default router;
