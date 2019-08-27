const db = require('../../models/dbConfig');

function findExercises() {
  return db('exercises');
}

function findExerciseById(id) {
  return db('exercises')
    .select()
    .where({ id: id })
    .first();
}

module.exports = {
  findExercises,
  findExerciseById,
};
