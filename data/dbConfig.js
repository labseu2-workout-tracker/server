const knex = require('knex');

const config = require('../knexfile.js');

<<<<<<< HEAD
const dbEnv = process.env.DATABASE_ENV || 'development';
=======
const dbEnv = process.env.DB_ENV || 'development';
>>>>>>> 983bac2b85b1a6fbe824e3f58083c23df07749a5

module.exports = knex(config[dbEnv]);
