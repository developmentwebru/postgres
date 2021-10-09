const Pool = require("pg").Pool;
const pool = new Pool({
  user: "pinfognjoqksct",
  host: "ec2-52-7-228-45.compute-1.amazonaws.com",
  database: "d6vqdto88ecej",
  password: "236ac34fce57dc0a4eb114d42ca0bdef5d88e7a5e81369ed110edcc9c50d0f01",
  port: 5432,
});

pool.connect();

module.exports = pool;
