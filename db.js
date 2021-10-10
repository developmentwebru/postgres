const Pool = require("pg").Pool;
require("dotenv").config();

const devConfig = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
};

// const developConf = {
//   user: "postgres",
//   host: "localhost",
//   database: "postgres",
//   password: "root",
//   port: 5432,
// };

const proConfig = {
  connectionString: DATABASE_URL,
  ssl: { rejectUnauthorized: false },
};

const pool = new Pool(proConfig);

pool.connect();

module.exports = pool;
