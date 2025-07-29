const mongoose = require('mongoose');

const stopSchema = new mongoose.Schema({
  name: String,
  lat: Number,
  lng: Number
});

module.exports = mongoose.model('Stop', stopSchema);
