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
      const [newUser] = await User.createUser(credentials);
      res.status(201).json({
        message: 'User created',
        token: generateToken(newUser.email, newUser.id),
        user: newUser,
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
    if (!email) {
      return res
        .status(400)
        .json({ message: 'Oops, email is required for login.' });
    }
    const user = await User.findBy({ email });
    const isEqual = await bcrypt.compare(password, userPassword)
    if (user && isEqual) {
      return res.status(200).json({
        token: generateToken(user.email, user.id),
        userId: user.id,
      });
    }
    return res
      .status(401)
      .json({ message: 'Oops, email or password is incorrect' });
  } catch (err) {
    return res.status(500).json({
      message: 'Oops, something went wrong while loging in',
      err,
    });
  }
};
