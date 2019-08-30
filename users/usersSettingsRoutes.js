const router = require('express').Router();
const User = require('./usersModels');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
   
  } catch (error) {
    res.status(500).json({ Error: 'Internal Server Error' });
  }
});

module.exports = router;