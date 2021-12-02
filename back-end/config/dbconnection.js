const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'projAdocaoDogs',
  password: 'dunbar28',
  port: 5432,
})
module.exports = pool;
