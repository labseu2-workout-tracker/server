const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

// Import exercise route
const exerciseRouter = require('./exercises/exercisesRoutes');

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Use imported exercise route
server.use('/exercises', exerciseRouter);

server.get('/', (req, res) => {
<<<<<<< HEAD
=======

>>>>>>> 983bac2b85b1a6fbe824e3f58083c23df07749a5
  res.status(200).json({ message: 'Workout Tracker API' });
});

const port = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'test') {
  server.listen(port, console.log(`Listening on Port ${port}`));
}

module.exports = server;
