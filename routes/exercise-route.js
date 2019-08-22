const router = require('express').Router();

// const Exercise = require('../helpers/exercise-model');
// MUST CHANGE !!!

router.get('/exercises', async (req, res) => {
  try {
    const exercises = await Exercise.getAllExercises();
  res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ error: 'Cannot retrieve the exercises !' });
  }
});

  module.exports = router;