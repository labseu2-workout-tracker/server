const knex = require('knex');

const config = require('../knexfile.js');

const dbEnv = process.env.DATABASE_URL || 'development';

module.exports = knex(config[dbEnv]);
