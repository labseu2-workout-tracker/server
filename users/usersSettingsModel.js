const db = require('../data/dbConfig');

function updateUserSettings(id, userUpdate) {
  console.log(userUpdate);
  return db('users')
    .where({ id })
    .update(userUpdate)
    .returning('*');
}

module.exports = {
  updateUserSettings,
};
