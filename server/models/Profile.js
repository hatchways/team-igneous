"user strict";
var mongoose = require("mongoose");
var schema = mongoose.Schema;

var profileSchema = new schema({
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

module.exports = mongoose.model("profile", profileSchema);
