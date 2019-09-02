const workoutModel = require('../workouts/workoutsModels');

module.exports = async (req, res, next) => {
  const userSession = await workoutModel.findWorkoutSessionByUserId(
    req.userId,
  );
  if (userSession[0]) {
    return res.status(400).json({
      message:
        'You must finish your current workout before starting another',
    });
  }
  return next();
};
