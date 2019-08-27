const db = require('../data/dbConfig');

const findBy = filter => {
  return db('users')
    .where(filter)
    .first();
};

const createUser = async user => {
  const [id] = await db('users')
    .insert(user)
    .returning('id');
  return findBy(id);
};

module.exports = {
  findBy,
  createUser,
};
