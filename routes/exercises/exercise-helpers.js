const db = require('../../models/dbConfig');

function findExerciseById(id) {
  return db('exercises')
    .select()
    .where({ id: id })
    .first();
}

module.exports = {
  findExerciseById,
};
