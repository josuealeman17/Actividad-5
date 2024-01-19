// /backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const pyramidRoutes = require('./routes/pyramidRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

// Configuración de mongoose
mongoose.connect('mongodb://localhost:27017/nombre-de-tu-base-de-datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Rutas
app.use('/api/pyramid', pyramidRoutes);

// Resto de la configuración del servidor
// ...

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
