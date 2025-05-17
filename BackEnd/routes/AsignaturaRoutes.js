const express = require("express");
const router = express.Router();
const asignaturacontroller = require("../controllers/asignaturacontroller");

router.get("/",asignaturacontroller.consultar);
router.post("/",asignaturacontroller.ingresar);


module.exports = router;