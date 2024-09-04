const mysql = require("mysql2/promise");
require("dotenv").config();

async function initDb() {
  try {
    const connection = await mysql.createConnection({
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    });

    await connection.query(
      `CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\``
    );
    console.log("Database quiniela checked/created.");

    // Close the connection after database is created or checked
    await connection.end();
  } catch (err) {
    console.error("Error during DB initialization:", err);
  }
}

// Initialize the database
initDb().catch((err) => {
  console.error("Database initialization failed:", err);
});

// Create a pool to manage connections to the 'quiniela' database
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Export the pool for use elsewhere in the application
module.exports = pool;
