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
    const { id } = req.params;
    console.log(userId);
    const session = {
      session_start: new Date().toISOString(),
      workout_id: id,
      user_id: userId,
    };
    const startSession = await workoutModel.startWorkoutSession(
      session,
    );
    return res.status(200).json({
      message: 'workout session started',
      data: {
        sessionId: startSession.id,
        userId: startSession.user_id,
        start: startSession.session_start,
      },
    });
  } catch (error) {
    return res.status(500).json({
      Error: error.message,
    });
  }
};
