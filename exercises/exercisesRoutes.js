const router = require('express').Router();
const db = require('./exercise-helpers');

router.get('/', async (req, res) => {
  try {
    const exercises = await db.findExercises();
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ Error: 'Internal Server Error' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const exercise = await db.findExerciseById(id);
    if (exercise) {
      res.status(200).json(exercise);
    } else {
      res.status(400).json({ message: 'Invalid Id.' });
    }
  } catch (error) {
    res.status(500).json({ Error: 'Internal Server Error' });
  }
});

module.exports = router;
