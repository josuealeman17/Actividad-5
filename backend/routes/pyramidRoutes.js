// /backend/routes/pyramidRoutes.js
const pyramidController = require("../controllers/pyramidController");
const express = require("express");
const pyramidRoutes = express.Router();

pyramidRoutes.use("/pyramid", pyramidController);

// Otras rutas según sea necesario.

module.exports = pyramidRoutes;
// /backend/routes/pyramidRoutes.js

const pyramidService = require("../services/pyramidService");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const pyramidData = await pyramidService.getAllPyramidData();
    res.json(pyramidData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Otras rutas para CRUD si es necesario.

module.exports = router;
