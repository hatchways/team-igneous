const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,

  },
  sitterId: {
    type: mongoose.Schema.Types.ObjectId,
    requred: true,
  },
  start: {
    type: Date,
    default: Date.now,
  },
  end: {
    type: Date,
    default: Date.now,
  },
  accepted: {
    type: Boolean,
    default: false,
  },
  declined: {
    type: Boolean,
    default: false,
  },
  paid: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('request', requestSchema);