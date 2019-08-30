const db = require('../data/dbConfig');

function getWorkoutHistory(id) {
  console.log('model firing', id);
  return db('workouts').select({ id: id });
}

module.exports = {
  getWorkoutHistory,
};
