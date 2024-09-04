const { Quiniela } = require("../db/db");
const { Usuario } = require("../db/db");
const { Jornada } = require("../db/db");

const QuinielaController = {
  async createQuiniela(req, res) {
    try {
      const {
        usuarioId,
        jornadaId, // Extraemos la jornada del cuerpo de la solicitud
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

      // Verificar si el usuario existe
      const user = await Usuario.findByPk(usuarioId);
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      // Verificar si la jornada existe? Debería estar creada previamente en la db
      // const jornada = await Jornada.findByPk(jornadaId);
      // if (!jornada) {
      //   return res.status(404).json({ message: "Jornada no encontrada" });
      // }

      // Verificar si el usuario ya envió una quiniela para esta jornada? De momento lo dejo comentado

      // const existingQuiniela = await Quiniela.findOne({
      //   where: { usuarioId, jornadaId },
      // });
      // if (existingQuiniela) {
      //   return res
      //     .status(400)
      //     .json({ message: "Ya has enviado una quiniela para esta jornada." });
      // }

      // Crear la quiniela
      const quiniela = await Quiniela.create({
        usuarioId,
        jornadaId, // Asociamos la quiniela con la jornada
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
      const { usuarioId } = req.params;

      const user = await Usuario.findByPk(usuarioId);
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      const quiniela = await Quiniela.findOne({ where: { usuarioId } });
      if (!quiniela) {
        return res
          .status(404)
          .json({ message: "Quiniela no encontrada para este usuario" });
      }

      res.status(200).json({ message: "Quiniela encontrada", data: quiniela });
    } catch (error) {
      res.status(500).json({
        message: "Error al obtener la quiniela",
        error: error.message,
      });
    }
  },
};

module.exports = QuinielaController;
