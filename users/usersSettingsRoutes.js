const router = require('express').Router();
const User = require('./usersModels');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const settings = await User.findById(id);
    if (settings) {
      res.status(200).json(settings);
    } else {
      
    }
  } catch (error) {
    res.status(500).json({ Error: 'Internal Server Error' });
  }
});

module.exports = router;