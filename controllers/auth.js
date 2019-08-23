const { validationResult } = require('express-validator/check')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed');
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  const { email, username, password } = req.body;
  bcrypt
    .hash(password, 12)
    .then(hashedPw => {
      const credentials = {
        username: username,
        email: email,
        password: hashedPw
      }
      return User.createUser(credentials);
    })
    .then(result => {
      res.status(201).json({message: 'User created', userId: result.id});
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
