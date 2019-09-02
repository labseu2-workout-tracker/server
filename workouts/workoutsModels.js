const db = require('../data/dbConfig');

function findWorkoutById(id) {
  return db('workouts')
    .where({ id })
    .first()
    .select('workout_name', 'workout_description', 'image_url');
}

async function findWorkoutExercises(id) {
  const workout = await findWorkoutById(id);
  if (workout)
    workout.exercises = await db('workouts-exercises')
      .join('exercises', 'exercise_id', '=', 'exercises.id')
      .join('workouts', 'workout_id', '=', 'workouts.id')
      .join(
        'sets',
        'workouts-exercises.id',
        '=',
        'workout_exercise_id',
      )
      .where('workout_id', '=', id)
      .select(
        'exercises.exercise_name',
        'sets.reps',
        'sets.duration',
        'exercises.description',
        'exercises.video',
        'exercises.picture_one',
        'exercises.picture_two',
        'exercises.equipment',
      )
      .orderByRaw('position ASC');
  return workout;
}

function getWorkouts() {
  return db('workouts');
}

async function startWorkoutSession(session) {
  const [workoutSession] = await db('workout-session').insert(
    session,
    '*',
  );
  return workoutSession;
}

function findWorkoutSessionByUserId(userId) {
  return db('workout-session')
    .where({ user_id: userId })
    .whereNotNull('session_start')
    .whereNull('session_end');
}

module.exports = {
  findWorkoutExercises,
  findWorkoutById,
  getWorkouts,
  startWorkoutSession,
  findWorkoutSessionByUserId,
};
