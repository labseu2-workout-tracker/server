const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const workoutRoutes = require('./workouts/workoutsRoutes');
const exerciseRouter = require('./exercises/exercisesRoutes');
const exerciseSets = require('./workouts/exerciseSets/exerciseSetsRoutes');

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/workouts', workoutRoutes);
server.use('/workout_exercises', exerciseSets);
server.use('/exercises', exerciseRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Workout Tracker API' });
});

const port = process.env.PORT || 5000;
server.listen(port, console.log(`Listening on Port ${port}`));

module.exports = server;
