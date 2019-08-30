const router = require('express').Router();
const db = require('../users/usersSettingsModel');

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
