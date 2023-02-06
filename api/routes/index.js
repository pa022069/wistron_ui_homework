import express from 'express';

const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json('get success');
}).post((req, res) => {
  setTimeout(() => {
    res.status(200).json(req.body);
  }, 2000)
});

export default router;