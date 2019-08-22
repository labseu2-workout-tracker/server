const router = require('express').Router();

// const Workout = require('../helpers/workout-model');
// MUST CHANGE !!!

router.get('/workouts', async (req, res) => {
  try {
    const workouts = await Workout.getAllWorkouts();
  res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ error: 'Cannot retrieve the workouts' });
  }
});

  module.exports = router;