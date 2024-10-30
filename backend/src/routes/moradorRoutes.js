// src/routes/moradorRoutes.js
const express = require("express");
const router = express.Router();
const Morador = require("./models/Morador");

// Rota para criar um novo morador
router.post("/moradores", async (req, res) => {
  try {
    const novoMorador = new Morador(req.body);
    await novoMorador.save();
    res.status(201).send(novoMorador);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
