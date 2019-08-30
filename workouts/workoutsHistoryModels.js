const db = require('../data/dbConfig');

function getWorkoutHistory(id) {
  return db('workouts')
    .select()
    .where({ user_id: id });
}

module.exports = {
  getWorkoutHistory,
};
