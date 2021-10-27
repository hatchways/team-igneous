"use strict";

var profile = require("../models/Profile");

const listAllProfiles = (req, res) => {
  profile.find({}, function (err, result) {
    if (err) res.send(err);
    res.json(result);
  });
};

const createProfile = (req, res) => {
  var new_profile = new profile(req.body);
  console.log(req.body);
  new_profile.save(function (err, result) {
    if (err) res.send(err);
    res.json(result);
  });
};

const listProfile = (req, res) => {
  profile.findOne({ _id: req.params._id }, function (err, result) {
    if (err) res.send(err);
    res.json(result);
  });
};

const updateProfile = (req, res) => {
  profile.updateOne(
    { _id: req.query.profileID },
    req.body,
    function (err, result) {
      if (err) res.send(err);
      res.json(result);
    }
  );
};

module.exports = { listAllProfiles, listProfile, createProfile, updateProfile };
