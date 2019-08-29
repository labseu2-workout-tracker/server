const express = require('express');

const router = express.Router();

const DB = require('./workoutsModels');

router.get('/:id', async (req, res) => {
  try {
    const exercises = await DB.getWorkoutExercises(req.params.id);
    res.status(200).json(exercises);
  } catch (error) {
    res.status(404).json('Not found');
  }
});

router.get('/workouthistory/:id', async (req, res) => {
  try {
    const exerciseHistory = await DB.getWorkoutHistory(req.params.id);
    res.status(200).json(exerciseHistory);
  } catch (error) {
    res.status(404).json({ Message: 'Workout History not found' });
  }
});

module.exports = router;
