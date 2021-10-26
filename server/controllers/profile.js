"use strict";

var mongoose = require("mongoose"),
  Profile = mongoose.model("profiles");

module.exports = {
  list_all_profiles: function (req, res) {
    Profile.find({}, function (err, profile) {
      if (err) res.send(err);
      res.json(profile);
    });
  },
  create_a_profile: function (req, res) {
    var new_profile = new Profile(req.body);
    new_profile.save(function (err, profile) {
      if (err) res.send(err);
      res.json(profile);
    });
  },
  list_a_profile: function (req, res) {
    Profile.findOne(
      { profileID: req.params.profileID },
      function (err, profile) {
        if (err) res.send(err);
        res.json(profile);
      }
    );
  },
  update_a_profile: function (req, res) {
    Profile.updateOne(
      { profileId: req.params.profileID },
      req.body,
      function (err, profile) {
        if (err) res.send(err);
        res.json(profile);
      }
    );
  },
};
