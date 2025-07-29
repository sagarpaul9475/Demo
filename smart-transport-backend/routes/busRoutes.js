const express = require('express');
const router = express.Router();
const Bus = require('../models/Bus');

// Add new bus
router.post('/add', async (req, res) => {
  const bus = new Bus(req.body);
  await bus.save();
  res.send(bus);
});

// Update location
router.post('/update-location/:id', async (req, res) => {
  const { lat, lng } = req.body;
  const bus = await Bus.findByIdAndUpdate(req.params.id, {
    location: { lat, lng, updatedAt: Date.now() }
  }, { new: true });
  res.send(bus);
});

// Get all buses
router.get('/all', async (req, res) => {
  const buses = await Bus.find();
  res.send(buses);
});

module.exports = router;
