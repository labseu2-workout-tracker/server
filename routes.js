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

router.get("/workouts/:id", async (req, res) => {
  const getWorkout = await Workout.getWorkoutById(req.params.id);
  try {
    if(getWorkout) {
        res.status(200).json(getWorkout);
    } else {
      res.status(400).json({ message: 'invalid Id ' });
    }
  } catch (error) {
    res.status(500).json({ error: `Cannot retrieve the workout` });
  }
});

  module.exports = router;