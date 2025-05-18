// cambio de prueba para netlify
const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();
const estudiantesroutes = require('../../BackEnd/routes/AsignaturaRoutes');

app.use(cors());
app.use(express.json());
app.use('/estudiantes', estudiantesroutes);

// Exporta como handler para Netlify
module.exports.handler = serverless(app);
