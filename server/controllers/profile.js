"use strict";

var mongoose = require("mongoose"),
  profile = mongoose.model("profile");

module.exports = {
  list_all_profiles: function (req, res) {
    profile.find({}, function (err, result) {
      if (err) res.send(err);
      res.json(result);
    });
  },
  create_a_profile: function (req, res) {
    var new_profile = new profile(req.body);
    new_profile.save(function (err, result) {
      if (err) res.send(err);
      res.json(result);
    });
  },
  list_a_profile: function (req, res) {
    profile.findOne({ _id: req.params._id }, function (err, result) {
      if (err) res.send(err);
      res.json(result);
    });
  },
  update_a_profile: function (req, res) {
    profile.updateOne(
      { _id: req.params._id },
      req.body,
      function (err, result) {
        if (err) res.send(err);
        res.json(result);
      }
    );
  },
};
