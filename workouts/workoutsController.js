const workoutModel = require('./workoutsModels.js');

exports.getAllWorkout = async (req, res) => {
  try {
    const workouts = await workoutModel.getWorkouts();
    return res.status(200).json(workouts);
  } catch (error) {
    return res.status(500).json({
      Error: error,
    });
  }
};
