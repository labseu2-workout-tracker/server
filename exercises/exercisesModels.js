const db = require('../data/dbConfig');

<<<<<<< HEAD
function findExerciseById(id) {
  return db('exercises')
    .select()
    .where({ id })
    .first();
}

module.exports = {
  findExerciseById,
=======
function findExercises() {
  return db('exercises');
}

module.exports = {
  findExercises,
>>>>>>> 983bac2b85b1a6fbe824e3f58083c23df07749a5
};
