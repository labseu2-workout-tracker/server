const { check, validationResult } = require('express-validator');

const validateUserInput = [
  check('password')
    .optional()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
    .trim(),
  check('username')
    .optional()
    .isLength({ min: 2 })
    .withMessage('Username must be at least 2 characters long')
    .isAlphanumeric()
    .trim(),
  check('gender')
    .optional()
    .isIn(['male', 'female', 'other'])
    .withMessage('Gender should be one of male, female or other')
    .trim(),
  check('push_notification')
    .optional()
    .toBoolean(true)
    .isBoolean()
    .withMessage('push notifications should be boolean')
    .trim(),
  check('email_notification')
    .optional()
    .toBoolean(true)
    .isBoolean()
    .withMessage('email notifications should be boolean')
    .trim(),
  check('weight')
    .optional()
    .isFloat({ min: 1, max: 1000 })
    .withMessage('Weight should be float number between 1 and 1000')
    .trim(),
  check('height')
    .optional()
    .isFloat({ min: 1, max: 100 })
    .withMessage('Height should be float number between 1 and 100')
    .trim(),
  check('user_level')
    .optional()
    .isIn(['Beginner', 'Intermediate', 'Expert'])
    .withMessage(
      'User level should be one of Beginner, Intermediate or Expert',
    )
    .trim(),
  check('unit')
    .optional()
    .isIn(['kg/m', 'pound/foot'])
    .withMessage('Units should be one of kg/m or pound/foot')
    .trim(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessage = {};
      errors.array().forEach(i => {
        errorMessage[i.param] = i.msg;
      });
      res.status(400).json({
        status: 400,
        error: errorMessage,
      });
    } else next();
  },
];

module.exports = {
  validateUserInput,
};
