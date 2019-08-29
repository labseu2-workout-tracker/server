const express = require('express');

const router = express.Router();

const DB = require('../workouts/workoutsHistoryModels');

router.get('/:id', async (req, res) => {
    console.log(req.params.id)
  try {
      const exerciseHistory = await DB.getWorkoutHistory(req.params.id);
      console.log(exerciseHistory);
    res.status(200).json(exerciseHistory);
  } catch (error) {
    res.status(404).json({ Message: 'Workout History not found' });
  }
});

module.exports = router;
