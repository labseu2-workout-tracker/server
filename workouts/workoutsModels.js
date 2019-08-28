const db = require('../data/dbConfig');

function getWorkoutExercises(id) {
  return db('workouts-exercises')
    .join('exercises', 'exercise_id', '=', 'exercises.id')
    .join('workouts', 'workout_id', '=', 'workouts.id')
    .where('workout_id', '=', id);
}

function getWorkouts() {
  return db('workouts');
}

module.exports = {
  getWorkoutExercises,
  getWorkouts,
};
