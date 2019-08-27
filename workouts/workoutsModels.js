const db = require('../data/dbConfig');

function getWorkouts() {
  return db('workouts');
}

module.exports = {
  getWorkouts,
};
