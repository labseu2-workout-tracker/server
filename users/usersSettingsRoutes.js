const router = require('express').Router();
const User = require('./usersModels');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
});

module.exports = router;