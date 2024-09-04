const mysql = require("mysql2/promise");
require("dotenv").config();

async function initDb() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    });

    await connection.query(`CREATE DATABASE IF NOT EXISTS quiniela`);
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
  host: "localhost",
  user: "root",
  password: "1234",
  database: "quiniela", // Database name 'quiniela'
  waitForConnections: true,
  connectionLimit: 10, // Max number of connections in the pool
  queueLimit: 0, // No limit to the number of queued connection requests
});

// Export the pool for use elsewhere in the application
module.exports = pool;
