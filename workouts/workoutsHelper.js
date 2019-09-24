const { check, validationResult } = require('express-validator');

const validateWorkoutBody = [
  check('workout_name')
    .matches(/^[a-z\d\-_\s']+$/i)
    .not()
    .isEmpty()
    .withMessage('Workout name cannot be empty')
    .trim(),

  check('workout_description')
    .matches(/^[a-z\d\-_\s']+$/i)
    .not()
    .isEmpty()
    .withMessage('Workout description cannot  be empty')
    .trim(),

  check('exercises')
    .isArray()
    .withMessage('You must provide an array of exercises')
    .not()
    .isEmpty()
    .withMessage('Exercises for workout must be provided'),

  check('level')
    .isIn(['Beginner', 'Intermediate', 'Expert'])
    .optional(),

  check('image_url')
    .isURL()
    .optional(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = {};
      errors.array().forEach(error => {
        errorMessage[error.param] = error.msg;
      });
      return res.status(400).json({
        status: 400,
        errorMessage,
      });
    }
    return next();
  },
];

module.exports = {
  validateWorkoutBody,
};
