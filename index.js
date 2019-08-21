
const server = require('./api/server')

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Workout Tracker API' });
});

const port = process.env.PORT || 5000;

server.listen(port, console.log(`Listening on Port ${port}`));