const db = require('../data/dbConfig');

function findExerciseById(id) {
  return db('exercises')
    .select()
    .where({ id })
    .first();
}

module.exports = {
  findExerciseById,
};
