const router = require('express').Router();
const db = require('./exercise-helpers');

router.get('/:id', (req, res) => {
  res.status(200).json({ Msg: 'This is exercise endpoint' });
});

module.exports = router;
