const dotenv = require('dotenv');
const { check, validationResult } = require('express-validator');

const validateWorkoutBody = [
  check('workout_name')
    .matches(/^[a-z\d\-_\s]+$/i)
    .not()
    .isEmpty()
    .withMessage('Workout name cannot  be empty')
    .trim(),

  check('workout_description')
    .matches(/^[a-z\d\-_\s]+$/i)
    .not()
    .isEmpty()
    .withMessage('Workout description cannot  be empty')
    .trim(),

  check('level')
    .isIn(['Beginner', 'Intermediate', 'Expert'])
    .optional(),

  check('image_url')
    .isURL()
    .optional(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json(errors.array());
    }
    next();
  },
];

module.exports = {
  validateWorkoutBody,
};
