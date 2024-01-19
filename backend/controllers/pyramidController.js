// /backend/controllers/pyramidController.js
const express = require('express');
const pyramidService = require('../services/pyramidService');

const pyramidController = express.Router();

// Manejar la solicitud para obtener todos los datos de la pirámide
pyramidController.get('/pyramid', async (req, res) => {
  try {
    const data = await pyramidService.getAllPyramidData();
    res.json(data);
  } catch (error) {
    console.error('Error in pyramid controller:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Otras rutas y funciones de controlador según sea necesario.

module.exports = pyramidController;
