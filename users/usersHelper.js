require('dotenv').config();
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const secret = process.env.JWT_SECRET || 'default';

const generateToken = (email, id) => {
  const token = jwt.sign(
    {
      email,
      userId: id,
    },
    secret,
    { expiresIn: '24h' },
  );
  return token;
};

const validateUser = [
  check('email')
    .isEmail()
    .withMessage('Please enter a valid email address.')
    .trim(),
  check('password')
    .isLength({ min: 6 })
    .withMessage(
      'Please add a password with at least 6 characters long.',
    )
    .trim(),
  check('username')
    .isLength({ min: 2 })
    .withMessage(
      'Please add a username with at least 2 characters long.',
    )
    .trim(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: 400,
        error: errors.array().map(i => i.msg),
      });
    }
    next();
  },
];

module.exports = {
  generateToken,
  validateUser,
};
