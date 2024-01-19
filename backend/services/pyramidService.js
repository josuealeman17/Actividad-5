// /backend/services/pyramidService.js
const Pyramid = require('../models/pyramidModel');

const pyramidService = {
  getAllPyramidData: async () => {
    try {
      const pyramidData = await Pyramid.find();
      return pyramidData;
    } catch (error) {
      console.error('Error in pyramid service:', error);
      throw new Error('Error retrieving pyramid data');
    }
  },

  // Otras funciones del servicio para CRUD (Crear, Leer, Actualizar, Eliminar) si es necesario.
};

module.exports = pyramidService;
