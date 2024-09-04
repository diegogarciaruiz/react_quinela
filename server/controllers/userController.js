const { Usuario } = require("../db/db");

const UserController = {
  async createUser(req, res) {
    try {
      const { username, email } = req.body;

      // Verificar si el usuario ya existe basado en el correo electrónico
      const existingUser = await Usuario.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({
          message: "El usuario ya existe con este correo electrónico.",
        });
      }

      // Crear el nuevo usuario
      const newUser = await Usuario.create({ username, email });

      res
        .status(201)
        .json({ message: "Usuario creado con éxito", data: newUser });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al crear usuario", error: error.message });
    }
  },

  async getUser(req, res) {
    try {
      const { usuarioId } = req.params;
      const user = await Usuario.findByPk(usuarioId);
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      res.status(200).json(user);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al obtener usuario", error: error.message });
    }
  },
};

module.exports = UserController;
