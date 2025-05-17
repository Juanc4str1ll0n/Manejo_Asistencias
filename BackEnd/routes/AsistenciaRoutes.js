const express = require("express");
const router = express.Router();
const asistenciascontroller = require("../controllers/asistenciacontroller");

router.get("/",asistenciascontroller.consultar);
router.post("/",asistenciascontroller.ingresar);

module.exports = router;