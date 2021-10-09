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
  connectionString: `postgres://pinfognjoqksct:236ac34fce57dc0a4eb114d42ca0bdef5d88e7a5e81369ed110edcc9c50d0f01@ec2-52-7-228-45.compute-1.amazonaws.com:5432/d6vqdto88ecej`,
};

const pool = new Pool({ proConfig });

pool.connect();

module.exports = pool;
