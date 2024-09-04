const { Jornada } = require("./db");
const { Usuario } = require("./db");
const { sequelize } = require("./db");

async function seedDb() {
  try {
    // Sincronizar la base de datos, asegúrate de que las tablas están listas
    await sequelize.sync({ force: false });

    // Insertar 5 jornadas
    const jornadas = [
      { id: 1, name: "Jornada 1", date: new Date() },
      { id: 2, name: "Jornada 2", date: new Date() },
      { id: 3, name: "Jornada 3", date: new Date() },
      { id: 4, name: "Jornada 4", date: new Date() },
      { id: 5, name: "Jornada 5", date: new Date() },
    ];

    // Insertar 2 usuarios
    const usuarios = [
      { id: 1, username: "Diego", email: "diego@diego.com" },
      { id: 2, username: "Pau", email: "pau@pau.com" },
    ];

    // Usar bulkCreate para insertar múltiples jornadas de una sola vez
    await Jornada.bulkCreate(jornadas);
    await Jornada.bulkCreate(usuarios);

    console.log("Seed data inserted successfully.");
    process.exit(0); // Termina el proceso después de la inserción
  } catch (error) {
    console.error("Error inserting seed data:", error);
    process.exit(1); // Termina el proceso con error
  }
}

// Ejecutar la función para hacer el seeding
seedDb();
