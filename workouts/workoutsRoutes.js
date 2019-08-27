const express = require('express');

const router = express.Router();
const DB = require('./workoutsModels');
const workoutsController = require('./workoutsController');
const checkLoggedIn = require('../middlewares/restrictedMiddleware');

router.get('/:id', async (req, res) => {
  try {
    const exercises = await DB.getWorkoutExercises(req.params.id);
    res.status(200).json(exercises);
  } catch (error) {
    res.status(404).json('Not found');
  }
});

router.get('/', checkLoggedIn, workoutsController.getAllWorkout);

router.get('/', async (req, res) => {
  try {
    const workouts = await DB.getWorkouts();
    return res.status(200).json(workouts);
  } catch (error) {
    return res.status(500).json({
      Error: error,
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const workouts = await DB.getWorkouts();
    return res.status(200).json(workouts);
  } catch (error) {
    return res.status(500).json({
      Error: error,
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const workouts = await DB.getWorkouts();
    return res.status(200).json(workouts);
  } catch (error) {
    return res.status(500).json({
      Error: error,
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const workouts = await DB.getWorkouts();
    return res.status(200).json(workouts);
  } catch (error) {
    return res.status(500).json({
      Error: error,
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const workouts = await DB.getWorkouts();
    return res.status(200).json(workouts);
  } catch (error) {
    return res.status(500).json({
      Error: error,
    });
  }
});

module.exports = router;
