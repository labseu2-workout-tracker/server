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

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findBy({ email });
    if (user && bcrypt.compare(password, user.password)) {
      const token = await jwt.sign(
        {
          email: user.email,
          userId: user.id,
        },
        'JWT SECRET',
        { expiresIn: '24h' },
      );
      return res.status(200).json({ token, userId: user.id });
    } else {
      return res
        .status(401)
        .json({ message: 'Oops, username or password is incorrect' });
    }
  } catch (err) {
    res.status(500).json(error);
    next(err);
  }
};
