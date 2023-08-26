const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  team: String,
  jersey: Number,
});

module.exports = mongoose.model('Player', playerSchema);

