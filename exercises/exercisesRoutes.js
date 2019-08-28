const router = require('express').Router();
const db = require('./exercisesModels');

router.get('/', async (req, res) => {
  try {
    const exercises = await db.findExercises();
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ Error: 'Internal Server Error' });
  }
});

module.exports = router;
