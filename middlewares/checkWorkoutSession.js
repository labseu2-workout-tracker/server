const workoutModel = require('../workouts/workoutsModels');

module.exports = async (req, res, next) => {
  // split endpoint and save the last path.
  let endpoint = req.originalUrl.split('/');
  endpoint = endpoint[endpoint.length - 1];
  const userSession = await workoutModel.findWorkoutSessionByUserId(
    req.userId,
  );
  if (userSession[0]) {
    if (endpoint === 'end') {
      [req.session] = userSession;
      return next();
    }
    return res.status(400).json({
      message:
        'You must finish your current workout before starting another',
    });
  }
  if (endpoint === 'end') {
    return res.status(400).json({
      message: 'You do not have a workout in session',
    });
  }
  return next();
};
