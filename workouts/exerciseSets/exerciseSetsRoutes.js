const express = require('express');

const router = express.Router();

const DB = require('./exerciseSetsModels');

router.post('/sets', async (req, res) => {
  const newSets = req.body;
  try {
    await DB.exerciseSets(newSets);
    res.status(200).json(newSets);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
