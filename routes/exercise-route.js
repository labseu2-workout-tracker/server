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

router.get("/exercises/:id", async (req, res) => {
  const getExercise = await Exercise.getExerciseById(req.params.id);
  try {
    if(getExercise) {
        res.status(200).json(getExercise);
    } else {
      res.status(400).json({ message: 'invalid Id !' });
    }
  } catch (error) {
    res.status(500).json({ error: `Cannot retrieve the exercise !` });
  }
});

  module.exports = router;