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
