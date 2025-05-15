var express = require('express');
var cors = require('cors');
var serverless = require('serverless-http');
var port = process.env.PORT || 3000;
var app = express();
var estudiantesroutes = require('BackEnd/routes/departamentoRoutes.js');
app.use(express.json());
app.use(cors());

var router = express.Router();
router.use('/estudiantes', estudiantesroutes);

var handler = app.use ('/.netlify/functions/api', router); // path must route to lambda
exports.handler = serverless(app);