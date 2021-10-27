"use strict";

const profile = require("../models/Profile");

const getAllProfiles = (req, res) => {
  profile.find({}, function (err, result) {
    if (err) res.send(err);
    res.json(result);
  });
};

const createProfile = (req, res) => {
  const { firstName, lastName, description, availability } = req.body;
  if (firstName && typeof firstName !== "string") {
    res.status(404);
    throw new Error("Provide input as a String for firstName");
  }
  if (lastName && typeof lastName !== "string") {
    res.status(404);
    throw new Error("Provide input as a String for lastName");
  }
  if (description && typeof description !== "string") {
    res.status(404);
    throw new Error("Provide input as a String for description");
  }
  if (availability && typeof availability !== "boolean") {
    res.status(404);
    throw new Error("Provide input as a Boolean for availability");
  }

  let newProfile = new profile(req.body);
  newProfile.save(function (err, result) {
    if (err) res.send(err);
    res.json(result);
  });
};

const getProfile = (req, res) => {
  profile.findOne({ _id: req.params.profileID }, function (err, result) {
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

module.exports = { getAllProfiles, getProfile, createProfile, updateProfile };
