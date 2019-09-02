const router = require('express').Router();
const User = require('./usersModels');
const db = require('../users/usersSettingsModel');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const settings = await User.findById(id);
    if (settings) {
      res.status(200).json(settings);
    } else {
      res.status(400).json({ message: 'Invalid Id.' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: 'Internal Server Error' });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const updatedSettings = await db.updateUserSettings(
      req.params.id,
      req.body,
    );
    res.status(200).json(updatedSettings);
  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: 'Internal Server Error' });
  }
});

module.exports = router;
