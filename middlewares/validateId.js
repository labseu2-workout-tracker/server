const workoutModel = require('../workouts/workoutsModels');

async function validateId(req, res, next) {
  const id = Number(req.params.id);
  if (Number.isNaN(id) || id % 1 !== 0 || id < 0) {
    return res.status(400).send({
      error: 'Invalid Workout ID provided',
    });
  }
  try {
    const data = await workoutModel.findWorkoutExercises(id);
    if (data) {
      req.workoutDetails = data;
      return next();
    }
    return res.status(404).send({
      error: 'Workout ID provided does not exist',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: 'Internal Server Error',
      error,
    });
  }
}

module.exports = validateId;
