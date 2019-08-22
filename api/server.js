const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server = express();



const app_routes = require('../app_routes/routes.js')

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use('/api', app_routes)

module.exports = server