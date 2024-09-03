const mysql = require("mysql2/promise");

async function initDb() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS quiniela`);
  connection.end();
}
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "quiniela",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

initDb().catch((err) => {
  console.error("Database initialization failed:", err);
});

module.exports = pool;
