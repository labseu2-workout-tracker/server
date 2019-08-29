require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'default';

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    res.status(400).json({
      message: 'No Token Provided',
    });
  }
  const token = authHeader.split(' ')[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, secret);
  } catch (err) {
    res.status(401).json({
      message: 'Invalid Token.',
      err,
    });
  }

  req.userId = decodedToken.userId;
  next();
};
