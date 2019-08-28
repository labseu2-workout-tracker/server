require('dotenv').config();
const bcrypt = require('bcryptjs');
const User = require('./usersModels');
const { generateToken } = require('./usersHelper');

exports.signup = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const credentials = {
      username,
      email,
      password: hashedPassword,
    };
    const user = await User.findBy({ email: credentials.email });
    if (user) {
      res.status(409).json({
        message: 'Oops, user already exists',
      });
    } else {
      const newUser = await User.createUser(credentials);
      res.status(201).json({
        message: 'User created',
        token: generateToken(newUser.email, newUser.id),
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Oops, something went wrong while registering',
      error,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findBy({ email });
    if (user && bcrypt.compare(password, user.password)) {
      return res
        .status(200)
        .json({ token: generateToken(user.email, user.id) });
    }
    return res
      .status(401)
      .json({ message: 'Oops, username or password is incorrect' });
  } catch (err) {
    return res.status(500).json({
      message: 'Oops, something went wrong while loging in',
      err,
    });
  }
};
