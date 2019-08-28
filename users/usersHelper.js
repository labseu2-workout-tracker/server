require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'default';

const generateToken = (email, id) => {
  const token = jwt.sign(
    {
      email: email,
      userId: id,
    },
    secret,
    { expiresIn: '24h' },
  );
  return token;
};
module.exports = {
  generateToken,
};
