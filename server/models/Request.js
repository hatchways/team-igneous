const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  user_id: {
    type: String,
  },
  sitter_id: {
    type: String,
  },
  start: {
    type: Number,
  },
  end: {
    type: Number,
  },
  accepted: {
    type: Boolean,
  },
  declined: {
    type: Boolean,
  },
  paid: {
    type: Boolean,
  },
});

module.exports = mongoose.model('request', requestSchema);