const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  registrationNumber: String,
  routeId: String,
  fuelType: String, // "Electric", "CNG", etc.
  emissionStandard: String, // "BS-IV", "BS-VI"
  location: {
    lat: Number,
    lng: Number,
    updatedAt: { type: Date, default: Date.now }
  }
});

module.exports = mongoose.model('Bus', busSchema);
