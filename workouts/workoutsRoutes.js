const router = require('express').Router();
const db = require('./workoutsModels');

router.get('/', async (req, res) => {
  try {
    const workouts = await db.getWorkouts();
    return res.status(200).json(workouts);
  } catch (error) {
    return res.status(500).json({
      Error: error,
    });
  }
});

module.exports = router;
