const db = require('../data/dbConfig');

function getWorkoutExercises(id) {
  return db('workouts-exercises')
    .join('exercises', 'exercise_id', '=', 'exercises.id')
    .join('workouts', 'workout_id', '=', 'workouts.id')
    .where('workout_id', '=', id);
}

function getWorkoutHistory(id, date) {
  return db('workouts').select({ user_id: id });
}

module.exports = {
  getWorkoutExercises,
  getWorkoutHistory,
};
