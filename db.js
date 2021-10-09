const Pool = require("pg").Pool;
require("dotenv").config();

const devConfig = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
};

const proConfig = {
  connectionString: process.env.PG_DATABASE_URL,
};

const pool = new Pool({ proConfig });

pool.connect();

module.exports = pool;
