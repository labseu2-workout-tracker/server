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

exports.startWorkoutSession = async (req, res) => {
  try {
    const { userId } = req;
    const { workoutId } = req.params;
    console.log(userId);
    console.log(workoutId);
    const session = {
      session_start: new Date().toISOString(),
      workout_id: workoutId,
      user_id: userId,
    };
    const startSession = await workoutModel.startWorkoutSession(
      session,
    );
    return res.status(200).json({
      message: 'workout session started',
      startSession,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      Error: error.message,
    });
  }
};
