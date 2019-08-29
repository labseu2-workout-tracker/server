const db = require('../data/dbConfig');

function findExercises() {
  return db('exercises');
}

function findExerciseById(id) {
  return db('exercises')
    .select()
    .where({ id })
    .first();
}

module.exports = {
  findExercises,
  findExerciseById,
};
