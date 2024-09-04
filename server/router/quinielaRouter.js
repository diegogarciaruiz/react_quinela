const express = require("express");
import QuinielaController from "../controllers/quinielaController";

const router = express.Router();

router.post("/quiniela", QuinielaController.createQuiniela);

router.get("/quiniela/:userId", QuinielaController.getQuiniela);

module.exports = router;
