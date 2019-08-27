const express = require('express');
const { body } = require('express-validator/check');

const User = require('./usersModels');
const usersControllers = require('./usersControllers');
const router = express.Router();

router.post(
  '/signup',
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email')
      .custom((value, { req }) => {
        return User.findByFilter({ email: value }).then(userDoc => {
          if (userDoc) {
            return Promise.reject('Email address already exists');
          }
        });
      })
      .normalizeEmail(),
    body('password')
      .trim()
      .isLength({ min: 8 }),
    body('username')
      .trim()
      .not()
      .isEmpty(),
  ],
  usersControllers.signup,
);

router.post('/login', usersControllers.login);

module.exports = router;
