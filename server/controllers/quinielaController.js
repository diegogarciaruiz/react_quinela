const QuinielaModel = require("../models/Quiniela");
const UserModel = require("../models/User");

const QuinielaController = {
  async createQuiniela(req, res) {
    try {
      const {
        userId,
        homeTeam1,
        awayTeam1,
        homeScorePrediction1,
        awayScorePrediction1,
        homeTeam2,
        awayTeam2,
        homeScorePrediction2,
        awayScorePrediction2,
        homeTeam3,
        awayTeam3,
        homeScorePrediction3,
        awayScorePrediction3,
        homeTeam4,
        awayTeam4,
        homeScorePrediction4,
        awayScorePrediction4,
        homeTeam5,
        awayTeam5,
        homeScorePrediction5,
        awayScorePrediction5,
      } = req.body;

      const user = await UserModel.findByPk(userId);
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      const quiniela = await QuinielaModel.create({
        userId,
        homeTeam1,
        awayTeam1,
        homeScorePrediction1,
        awayScorePrediction1,
        homeTeam2,
        awayTeam2,
        homeScorePrediction2,
        awayScorePrediction2,
        homeTeam3,
        awayTeam3,
        homeScorePrediction3,
        awayScorePrediction3,
        homeTeam4,
        awayTeam4,
        homeScorePrediction4,
        awayScorePrediction4,
        homeTeam5,
        awayTeam5,
        homeScorePrediction5,
        awayScorePrediction5,
      });

      res
        .status(201)
        .json({ message: "Quiniela creada con éxito", data: quiniela });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al crear la quiniela", error: error.message });
    }
  },

  async getQuiniela(req, res) {
    try {
      const { userId } = req.params;

      const user = await UserModel.findByPk(userId);
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      const quiniela = await QuinielaModel.findOne({ where: { userId } });
      if (!quiniela) {
        return res
          .status(404)
          .json({ message: "Quiniela no encontrada para este usuario" });
      }

      res.status(200).json({ message: "Quiniela encontrada", data: quiniela });
    } catch (error) {
      // Manejo de errores
      res.status(500).json({
        message: "Error al obtener la quiniela",
        error: error.message,
      });
    }
  },
};

module.exports = QuinielaController;
