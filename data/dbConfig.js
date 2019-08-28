const knex = require('knex');

const config = require('../knexfile.js');

const dbEnv = process.env.DATABASE_ENV || 'development';

module.exports = knex(config[dbEnv]);
