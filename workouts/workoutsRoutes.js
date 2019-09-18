const express = require('express');
const validateId = require('../middlewares/validateId');
const workoutsController = require('./workoutsController');
const checkLoggedIn = require('../middlewares/restrictedMiddleware');
const checkWorkoutSession = require('../middlewares/checkWorkoutSession');
const workoutsValidator = require('./workoutsHelper');

const router = express.Router();

router.get('/', checkLoggedIn, workoutsController.getAllWorkout);

router.get(
  '/:id([0-9]+)',
  checkLoggedIn,
  validateId,
  workoutsController.getOneWorkout,
);

router.post(
  '/:id([0-9]+)/start',
  checkLoggedIn,
  validateId,
  checkWorkoutSession,
  workoutsController.startWorkoutSession,
);

router.post(
  '/:id([0-9]+)/end',
  checkLoggedIn,
  validateId,
  checkWorkoutSession,
  workoutsController.endWorkoutSession,
);

router.get(
  '/history',
  checkLoggedIn,
  workoutsController.getWorkoutHistory,
);

router.post(
  '/',
  checkLoggedIn,
  workoutsValidator.validateWorkoutBody,
  workoutsController.createWorkout,
);

module.exports = router;
