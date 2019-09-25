const workoutModel = require('./workoutsModels.js');

exports.getAllWorkout = async (req, res) => {
  const user_id = req.userId;
  try {
    const workouts = await workoutModel.getWorkouts(user_id);
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
    return endSession
      ? res.status(200).json({
          message: 'workout session ended',
        })
      : res.status(500).json({
          error: 'Something went wrong, Please Try Again',
        });
  } catch (error) {
    return res.status(500).json({
      Error: error.message,
    });
  }
};

exports.getWorkoutHistory = async (req, res) => {
  try {
    let { days } = req.query;
    // if days provided is not valid, discard it.
    days = !Number.isNaN(Number(days)) ? days : undefined;
    const { userId } = req;
    const workoutHistory = await workoutModel.getWorkoutHistory(
      userId,
      days,
    );
    return res.status(200).json({
      message: 'Workout History Retrieved Succesfully',
      workoutHistory,
    });
  } catch (error) {
    return res.status(500).json({
      Error: error.message,
    });
  }
};

exports.createWorkout = async (req, res) => {
  const {
    workout_name,
    workout_description,
    level,
    image_url,
    exercises,
  } = req.body;
  const user_id = req.userId;
  const newWorkout = {
    workout_name,
    workout_description,
    level,
    image_url,
    user_id,
  };
  try {
    const newWorkoutInfo = await workoutModel.createWorkout(
      newWorkout,
      exercises,
    );
    if (!newWorkoutInfo) {
      return res.status(400).json({
        errorMessage: 'Something went wrong with your request',
      });
    }
    return res.status(201).json(newWorkoutInfo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      errorMessage: error,
    });
  }
};

exports.save_Workouts = async (req, res) => {
  const { workouts_id } = req.body;
  const user_id = req.userId;
  try {
    const saved = await workoutModel.saveWorkouts(
      user_id,
      workouts_id,
    );
    return saved
      ? res.status(200).json({ saved })
      : res
          .status(400)
          .json({ message: 'This workout already exists!' });
  } catch (error) {
    return res.status(500).json({
      errorMessage: error,
    });
  }
};

exports.get_saved_workouts = async (req, res) => {
  const { id } = req.params;
  try {
    const allSavedWorkouts = await workoutModel.getSavedWorkouts(id);
    return res.status(200).json(allSavedWorkouts);
  } catch (error) {
    return res.status(500).json({ errorMessage: error });
  }
};

exports.del_saved_workout = async (req, res) => {
  const { user_id, workouts_id } = req.body;
  try {
    const delWorkout = await workoutModel.deleteSavedWorkout(
      user_id,
      workouts_id,
    );
    return res.status(200).json(delWorkout);
  } catch (error) {
    return res.status(500).json({ errorMessage: error });
  }
};
