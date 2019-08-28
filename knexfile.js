require('dotenv').config(); // load .env variables

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_DEV,
    useNullAsDefault: true, // used to avoid warning on console
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './data/seeds' },
  },
  testing: {
    client: 'pg',
    connection: process.env.DATABASE_TEST,
    useNullAsDefault: true,
    migrations: {
      directory: './models/migrations',
      tableName: 'dbmigrations',
    },
    seeds: {
      directory: '.seeds/test',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: {
      directory: './models/migrations',
      tableName: 'dbmigrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};
