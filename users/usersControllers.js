require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./usersModels');

const secret = process.env.JWT_SECRET || 'default';

exports.signup = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    hashedPw = await bcrypt.hash(password, 12);
    const credentials = {
      username,
      email,
      password: hashedPw,
    };
    const user = await User.findBy({ email: credentials.email });
    if (user) {
      res.status(409).json({
        message: 'Oops, user already exists',
      });
    } else {
      const newUser = await User.createUser(credentials);
      res
        .status(201)
        .json({ message: 'User created', newUser: newUser.id });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Oops, something went wrong while registering',
      error,
    });
  }
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
        secret,
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
