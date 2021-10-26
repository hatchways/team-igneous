"user strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var profileSchema = new Schema({
  profileID: {
    type: String,
  },
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

module.exports = mongoose.model("profiles", profileSchema);
