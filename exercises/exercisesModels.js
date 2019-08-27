const db = require('../data/dbConfig');

function findExercises() {
  return db('exercises');
}

module.exports = {
  findExercises,
};
