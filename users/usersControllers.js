const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./usersModels');

exports.signup = (req, res, next) => {
  const { email, username, password } = req.body;
  bcrypt
    .hash(password, 12)
    .then(hashedPw => {
      const credentials = {
        username,
        email,
        password: hashedPw,
      };
      return User.createUser(credentials);
    })
    .then(result => {
      console.log('result', result);
      res
        .status(201)
        .json({ message: 'User created', id: result.id });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.login = (req, res, next) => {
  const { email, password } = req.body;
  let loadedUser;
  User.findBy({ email })
    .then(user => {
      if (!user) {
        const error = new Error(
          'A user with this email could not be found',
        );
        error.statusCode = 401;
        throw error;
      }
      loadedUser = user;
      return bcrypt.compare(password, user.password);
    })
    .then(isEqual => {
      if (!isEqual) {
        const error = new Error('Wrong password');
        error.statusCode = 401;
        throw error;
      }
      const token = jwt.sign(
        {
          email: loadedUser.email,
          userId: loadedUser.id,
        },
        'JWT SECRET',
        { expiresIn: '24h' },
      );
      res.status(200).json({ token, userId: loadedUser.id });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
