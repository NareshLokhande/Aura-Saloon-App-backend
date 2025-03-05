const express = require('express');
const router = express.Router();
const Service = require('../model/servicesSchema');

// GET all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: "Services not found" });
  }
});

module.exports = router;
