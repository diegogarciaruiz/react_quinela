const express = require("express");
const ResultController = require("../controllers/resultadosController");

const router = express.Router();

// Crear resultados para una jornada
router.post("/result", ResultController.createResult);

// Obtener resultados de una jornada específica
router.get("/result/:jornadaId", ResultController.getResult);

module.exports = router;
