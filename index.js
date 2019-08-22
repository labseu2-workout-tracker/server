const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Workout Tracker API' });
});

const port = process.env.PORT || 5000;
server.listen(port, console.log(`Listening on Port ${port}`));