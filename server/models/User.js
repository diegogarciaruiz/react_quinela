const pool = require('../db/db');

const UserModel = {
  async createUser(name, email) {
    const [rows] = await pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
    return rows;
  },
  async getUserById(id) {
    const [rows] = await pool.query('SELECT * FROM users WHERE user_id = ?', [id]);
    return rows[0];
  }
};

module.exports = UserModel;
