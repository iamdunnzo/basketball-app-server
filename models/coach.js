const mongoose = require('mongoose');

const coachSchema = new mongoose.Schema({
  name: String,
  experience: Number,
  team: String,
  coachtype: String,
  speciality: String,

});

module.exports = mongoose.model('Coach', coachSchema);