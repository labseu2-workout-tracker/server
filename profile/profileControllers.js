const bcrypt = require('bcryptjs');
const usersModel = require('../users/usersModels');

exports.getOne = async (req, res) => {
  try {
    const id = req.userId;
    const user = await usersModel.findById(id);
    res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      error,
      errorMessage: 'Internal Server Error',
    });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const {
      username,
      password,
      email,
      gender,
      weight,
      height,
      fullname,
    } = req.body;
    const pushNotification = req.body.push_notification;
    const emailNotification = req.body.email_notification;
    const hashedPassword = password
      ? await bcrypt.hash(password, 12)
      : null;
    const id = req.userId;
    const user = await usersModel.findById(id);
    const newUser = {
      username: username || user.username,
      email: email || user.email,
      gender: gender || user.gender,
      push_notification: pushNotification || user.push_notification,
      email_notification:
        emailNotification || user.email_notification,
      weight: weight || user.weight,
      height: height || user.height,
      fullname: fullname || user.fullname,
    };
    if (hashedPassword) newUser.password = hashedPassword;
    const [updatedUser] = await usersModel.updateUser(id, newUser);
    res.status(200).json({
      user: updatedUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error, errorMessage: 'Internal Server Error' });
  }
};
