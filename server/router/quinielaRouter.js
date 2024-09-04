const express = require("express");
const QuinielaController = require("../controllers/quinielaController");

const router = express.Router();

router.post("/quiniela", QuinielaController.createQuiniela);

router.get("/quiniela/:usuarioId", QuinielaController.getQuiniela);

module.exports = router;
