const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const usersRoutes = require('./users/usersRoutes');

const server = express();

const workoutRoutes = require('./workouts/workoutsRoutes');
const exerciseRouter = require('./exercises/exercisesRoutes');

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/auth', usersRoutes);

server.use('/workouts', workoutRoutes);
server.use('/exercises', exerciseRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Workout Tracker API' });
});

const port = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'test') {
  server.listen(port, console.log(`Listening on Port ${port}`));
}

module.exports = server;
