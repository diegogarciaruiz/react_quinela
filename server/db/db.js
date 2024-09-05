const mysql = require("mysql2/promise");
const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

// MySQL Initialization: Creating the database if it doesn't exist
async function initDb() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    });

    // Create the database if it doesn't exist
    await connection.query(
      `CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\``
    );
    console.log(`Database '${process.env.DB_NAME}' checked/created.`);

    // Close the connection after database is created or checked
    await connection.end();
  } catch (err) {
    console.error("Error during DB initialization:", err);
  }
}

// Call the function to initialize the database
initDb().catch((err) => {
  console.error("Database initialization failed:", err);
});

// Sequelize Initialization: Create an instance of Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

// Import the models
const Usuario = require("../models/Usuario")(sequelize, DataTypes);
const Jornada = require("../models/Jornada")(sequelize, DataTypes);
const Quiniela = require("../models/Quiniela")(sequelize, DataTypes);
const Resultado = require("../models/Resultado")(sequelize, DataTypes);

// Set up associations (if applicable)
Usuario.associate = (models) => {
  Usuario.hasMany(models.Quiniela, { foreignKey: "usuarioId" });
};
Quiniela.associate = (models) => {
  Quiniela.belongsTo(models.Usuario, { foreignKey: "usuarioId" });
  Quiniela.belongsTo(models.Jornada, { foreignKey: "jornadaId" });
};
Jornada.associate = (models) => {
  Jornada.hasMany(models.Quiniela, { foreignKey: "jornadaId" });
};

 // Create the models object to export
const db = {
  Usuario,
  Jornada,
  Quiniela,
  Resultado,
  sequelize,
  Sequelize,
};

// Sync the database (this creates the tables if they don't exist)
sequelize
  .sync({ force: false }) // Set `force: true` only if you want to overwrite the tables
  .then(() => {
    console.log("Database tables synchronized successfully.");
  })
  .catch((err) => {
    console.error("Error during table synchronization:", err);
  });

module.exports = db;
