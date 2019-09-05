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
        'exercises.muscle',
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

async function endWorkoutSession(sessionId, sessionEnd) {
  const workoutSession = await db('workout-session')
    .where('id', '=', sessionId)
    .update({
      session_end: sessionEnd,
    });
  return workoutSession;
}

function findWorkoutSessionByUserId(userId) {
  return db('workout-session')
    .where({ user_id: userId })
    .whereNotNull('session_start')
    .whereNull('session_end');
}

function getWorkoutHistory(userId, dayLimit) {
  // if dayLimit is provided, multiply the days by 86400000 milliseconds
  // subtract the result from the current day's JS Date value
  // parse the result to a Date value and convert toISOString()
  // if dayLimit is not provided, use a predefined default limit.
  const dateLimit =
    (dayLimit
      ? new Date(new Date() - dayLimit * 86400000).toISOString()
      : false) || new Date(1567213780604).toISOString();

  return db('workout-session')
    .where({
      user_id: userId,
    })
    .where('session_start', '>=', dateLimit)
    .select('id', 'session_start', 'session_end', 'workout_id');
}

module.exports = {
  findWorkoutExercises,
  findWorkoutById,
  getWorkouts,
  startWorkoutSession,
  endWorkoutSession,
  findWorkoutSessionByUserId,
  getWorkoutHistory,
};
