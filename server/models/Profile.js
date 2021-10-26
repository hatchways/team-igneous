"user strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProfileSchema = new Schema({
  ProfileID: {
    type: String,
  },
  FirstName: {
    type: String,
  },
  LastName: {
    type: String,
  },
  Description: {
    type: String,
  },
  Availability: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Profiles", ProfileSchema);
