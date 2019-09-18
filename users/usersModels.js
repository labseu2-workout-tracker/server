const db = require('../data/dbConfig');

const findBy = filter => {
  return db('users')
    .where(filter)
    .first();
};

const findById = id => {
  return db('users')
    .where({ id })
    .select(
      'id',
      'fullname',
      'username',
      'email',
      'gender',
      'push_notification',
      'email_notification',
      'weight',
      'height',
    )
    .first();
};

const createUser = async user => {
  return db('users').insert(user, [
    'id',
    'fullname',
    'email',
    'username',
  ]);
};

const updateUser = async (id, user) => {
  return db('users')
    .where({ id })
    .update(user, [
      'id',
      'username',
      'email',
      'gender',
      'push_notification',
      'email_notification',
      'weight',
      'height',
      'fullname',
    ]);
};

module.exports = {
  findBy,
  createUser,
  findById,
  updateUser,
};
