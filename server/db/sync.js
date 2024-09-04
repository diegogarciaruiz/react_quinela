const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

const Usuario = require("../models/Usuario")(sequelize, DataTypes);
const Jornada = require("../models/Jornada")(sequelize, DataTypes);
const Quiniela = require("../models/Quiniela")(sequelize, DataTypes);
const Resultados = require("../models/Resultados")(sequelize, DataTypes);

const db = {
  Usuario,
  Jornada,
  Quiniela,
  Resultados,
  sequelize,
  Sequelize,
};

// Sincronizar la base de datos (Crea las tablas si no existen)
db.sequelize
  .sync({ force: false }) // `force: false` para no sobrescribir las tablas existentes
  .then(() => {
    console.log("Tablas sincronizadas correctamente.");
  })
  .catch((err) => {
    console.error("Error al sincronizar las tablas:", err);
  });

module.exports = db;
