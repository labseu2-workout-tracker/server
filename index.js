const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

// Import exercise route
const exerciseRouter = require('./routes/exercises/exercise-routes');

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

<<<<<<< HEAD
// Use imported exercise route
server.use('/exercises', exerciseRouter);

server.get('/', (req, res) => {
=======
server.get('/api', (req, res) => {
>>>>>>> 8de28c3b758460b0a0057b33eb5af5c040219ede
  res.status(200).json({ message: 'Workout Tracker API' });
});

const port = process.env.PORT || 5000;
server.listen(port, console.log(`Listening on Port ${port}`));

module.exports = server;
