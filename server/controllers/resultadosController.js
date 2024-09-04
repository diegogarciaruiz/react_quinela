const { Resultado } = require("../db/db");
const { Jornada } = require("../db/db");

const ResultController = {
  async createResult(req, res) {
    try {
      const {
        jornadaId, // Jornada a la que pertenecen los resultados, debe estar creada previamente en la db
        homeTeam1,
        awayTeam1,
        homeScore1,
        awayScore1,
        homeTeam2,
        awayTeam2,
        homeScore2,
        awayScore2,
        homeTeam3,
        awayTeam3,
        homeScore3,
        awayScore3,
        homeTeam4,
        awayTeam4,
        homeScore4,
        awayScore4,
        homeTeam5,
        awayTeam5,
        homeScore5,
        awayScore5,
      } = req.body;

      const jornada = await Jornada.findByPk(jornadaId);
      if (!jornada) {
        return res.status(404).json({ message: "Jornada no encontrada" });
      }

      // Crear los resultados para la jornada
      const result = await Resultado.create({
        jornadaId,
        homeTeam1,
        awayTeam1,
        homeScore1,
        awayScore1,
        homeTeam2,
        awayTeam2,
        homeScore2,
        awayScore2,
        homeTeam3,
        awayTeam3,
        homeScore3,
        awayScore3,
        homeTeam4,
        awayTeam4,
        homeScore4,
        awayScore4,
        homeTeam5,
        awayTeam5,
        homeScore5,
        awayScore5,
      });

      res
        .status(201)
        .json({ message: "Resultados creados con éxito", data: result });
    } catch (error) {
      res.status(500).json({
        message: "Error al crear los resultados",
        error: error.message,
      });
    }
  },

  async getResult(req, res) {
    try {
      const { jornadaId } = req.params;

      const result = await Resultado.findOne({ where: { jornadaId } });
      if (!result) {
        return res
          .status(404)
          .json({ message: "Resultados no encontrados para esta jornada" });
      }

      res.status(200).json({ message: "Resultados encontrados", data: result });
    } catch (error) {
      res.status(500).json({
        message: "Error al obtener los resultados",
        error: error.message,
      });
    }
  },
};

module.exports = ResultController;
