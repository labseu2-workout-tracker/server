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
    connection: 'postgres://sziafjwyoordwf:1646512ec4e3c773a9462d02c59301bf18594273873a4b2c08887a3875029ff3@ec2-46-137-188-105.eu-west-1.compute.amazonaws.com:5432/dbae59a6pd1pqp?ssl=true',
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};
