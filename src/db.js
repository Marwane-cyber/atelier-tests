const { Pool } = require('pg');

module.exports = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 5432),
  user: process.env.DB_USER || 'test',
  password: process.env.DB_PASSWORD || 'test',
  database: process.env.DB_NAME || 'testdb',
});