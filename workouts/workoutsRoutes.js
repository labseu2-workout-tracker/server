const express = require('express');
const validateId = require('../middlewares/validateId');
const workoutsController = require('./workoutsController');
const checkLoggedIn = require('../middlewares/restrictedMiddleware');

const router = express.Router();

router.get(
  '/:id',
  checkLoggedIn,
  validateId,
  workoutsController.getOneWorkout,
);

router.get('/', checkLoggedIn, workoutsController.getAllWorkout);

module.exports = router;
