const UserModel = require("../models/Usuario");

const UserController = {
  async createUser(req, res) {
    try {
      const { name, email } = req.body;
      const result = await UserModel.createUser(name, email);
      res.status(201).json({ message: "Usuario creado", data: result });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al crear usuario", error: error.message });
    }
  },
  async getUser(req, res) {
    try {
      const { id } = req.params;
      const user = await UserModel.getUserById(id);
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
