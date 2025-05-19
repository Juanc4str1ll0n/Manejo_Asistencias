const express = require("express");
const router = express.Router();
const estudiantescontroller = require("../controllers/estudiantecontrollers")

router.get("/",estudiantescontroller.consultar)
router.post("/",estudiantescontroller.ingresar)


module.exports = router;