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
    res.status(500).json({ error });
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
    } = req.body;
    const userLevel = req.body.user_level;
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
      user_level: userLevel || user.user_level,
    };
    if (hashedPassword) newUser.password = hashedPassword;
    const [updatedUser] = await usersModel.updateUser(id, newUser);
    res.status(200).json({
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
