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

exports.endWorkoutSession = async (req, res) => {
  try {
    const sessionEnd = new Date().toISOString();
    const { id } = req.session;
    const endSession = await workoutModel.endWorkoutSession(
      id,
      sessionEnd,
    );
    return res.status(200).json({
      data: endSession,
      message: 'workout session ended',
    });
  } catch (error) {
    return res.status(500).json({
      Error: error.message,
    });
  }
};
