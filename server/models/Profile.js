'user strict';

const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  description: {
    type: String,
  },
  availability: {
    type: Boolean,
  },
});

module.exports = mongoose.model('profile', profileSchema);
