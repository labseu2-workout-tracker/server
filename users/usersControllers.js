require('dotenv').config();
const bcrypt = require('bcryptjs');
const User = require('./usersModels');
const { generateToken } = require('./usersHelper');

exports.signup = async (req, res) => {
  try {
    const { email, username, password, fullname } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const credentials = {
      username,
      email,
      password: hashedPassword,
      fullname,
    };
    const emailExist = await User.findBy({
      email: credentials.email,
    });
    const usernameExist = await User.findBy({
      username: credentials.username,
    });
    if (emailExist || usernameExist) {
      if (emailExist)
        res.status(409).json({
          errorMessage: 'Oops, email already exists',
        });
      else
        res.status(409).json({
          errorMessage: 'Oops, username already exists',
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
      errorMessage: 'Oops, something went wrong while registering',
      error,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        errorMessage:
          'Oops, email and password is required for login.',
      });
    }
    const user = await User.findBy({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
      return res.status(200).json({
        token: generateToken(user.email, user.id),
        userId: user.id,
      });
    }
    return res
      .status(401)
      .json({ errorMessage: 'Oops, email or password is incorrect' });
  } catch (err) {
    return res.status(500).json({
      errorMessage: 'Oops, something went wrong while loging in',
      err,
    });
  }
};
