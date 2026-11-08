const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST || 'host.docker.internal', // <-- ici
  port: 5432,
  user: 'test',
  password: 'test',
  database: 'testdb'
});

module.exports = pool;
