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

exports.getOneWorkout = async (req, res) => {
  try {
    res.status(200).json({
      data: req.workoutDetails,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
