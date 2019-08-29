const db = require('../data/dbConfig');

const findBy = filter => {
  return db('users')
    .where(filter)
    .first();
};

const findById = id => {
  return db('users')
    .where({ id })
    .first();
};

const createUser = async user => {
  const [id] = await db('users')
    .insert(user)
    .returning('id');
  return findById(id);
};

module.exports = {
  findBy,
  createUser,
  findById,
};
