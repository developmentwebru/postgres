const db = require("../db");

class UserController {
  async createUser(req, res) {
    try {
      console.log(process.env.DATABASE_URL);
      console.log("DATABASE_URL", DATABASE_URL);
      const { name, surname } = req.body;
      const newPerson = await db.query(
        `INSERT INTO person (name, surname) values ($1, $2) RETURNING *`,
        [name, surname]
      );
      res.json(newPerson.rows[0]);
    } catch (error) {
      console.log(process.env.DATABASE_URL);
      console.log("DATABASE_URL er", DATABASE_URL);
      console.log(error);
    }
  }
  async getUsers(req, res) {
    try {
      const users = await db.query(`SELECT * FROM person`);
      res.json(users.rows);
    } catch (error) {
      console.log(error);
    }
  }
  async getOneUser(req, res) {
    const id = req.params.id;
    const user = await db.query(`SELECT * FROM person where id = $1`, [id]);
    res.json(user.rows[0]);
  }
  async updateUser(req, res) {
    const { id, name, surname } = req.body;
    const user = await db.query(
      `UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *`,
      [name, surname, id]
    );
    res.json(user.rows[0]);
  }
  async deleteUser(req, res) {
    const id = req.params.id;
    const user = await db.query(`DELETE FROM person where id = $1`, [id]);
    res.json(user.rows[0]);
  }
}

module.exports = new UserController();
