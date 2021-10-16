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

// const proConfig = {
//   connectionString: DATABASE_URL,
//   ssl: { rejectUnauthorized: false },
// };

const stringproCongig = {
  ssl: { rejectUnauthorized: false },
  user: "pinfognjoqksct",
  host: "ec2-52-7-228-45.compute-1.amazonaws.com",
  database: "d6vqdto88ecej",
  password: "236ac34fce57dc0a4eb114d42ca0bdef5d88e7a5e81369ed110edcc9c50d0f01",
  port: 5432,
};

const pool = new Pool(stringproCongig);

pool.connect();

module.exports = pool;
