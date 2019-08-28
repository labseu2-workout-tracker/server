const router = require('express').Router();
const db = require('./exercisesModels');

<<<<<<< HEAD
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const exercise = await db.findExerciseById(id);
    if (exercise) {
      res.status(200).json(exercise);
    } else {
      res.status(400).json({ message: 'Invalid Id.' });
    }
=======
router.get('/', async (req, res) => {
  try {
    const exercises = await db.findExercises();
    res.status(200).json(exercises);
>>>>>>> 983bac2b85b1a6fbe824e3f58083c23df07749a5
  } catch (error) {
    res.status(500).json({ Error: 'Internal Server Error' });
  }
});

module.exports = router;
