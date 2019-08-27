const db = require('../data/dbConfig');

module.export = {
    getWorkoutExercises
}

function getWorkoutExercises() {
    return db('workouts-exercises')
    .join('exercises', 'exercise_id', 'exercises.id')
    .join('workouts', 'workout_id', 'workouts.id')
    .where('workout_id')
}