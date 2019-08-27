const router = require('express').Router();
const db = require('./exercise-helpers');

router.get('/', (req, res) => {
  db.findExercises()
    .then(exercises => {
      res.status(200).json(exercises);
    })
    .catch(err => {
      res.status(500).json({ Error: 'Internal Server Error' });
    });
});

router.get('/:id', (req, res) => {
  db.findExerciseById(req.params.id)
    .then(exercise => {
      res.status(200).json(exercise);
    })
    .catch(err => {
      res.status(500).json({ Error: 'Internal Server Error' });
    });
});

module.exports = router;