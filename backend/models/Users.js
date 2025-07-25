const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  auraPoints: { type: Number, default: 10000 },
  chakraLevel: { type: String, default: "root" },
});

module.exports = mongoose.model('User', userSchema);
