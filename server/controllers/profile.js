'use strict';
const asyncHandler = require("express-async-handler")
const Profile = require('../models/Profile');

const getAllProfiles = (req, res) => {
  Profile.find({}, function(err, result) {
    if (err) res.send(err);
    res.json(result);
  });
};

const createProfile = (req, res) => {
  const {
    firstName,
    lastName,
    gender,
    birthday,
    email,
    phoneNumber,
    address,
    description,
  } = req.body;
  if (firstName && typeof firstName !== 'string') {
    res.status(404);
    throw new Error('Provide input as a String for firstName');
  }
  if (lastName && typeof lastName !== 'string') {
    res.status(404);
    throw new Error('Provide input as a String for lastName');
  }
  if (gender && typeof gender !== 'string') {
    res.status(404);
    throw new Error('Provide input as a String for gender');
  }
  if (birthday && typeof birthday !== 'string') {
    res.status(404);
    throw new Error('Provide input as a date for birthday');
  }
  if (email && typeof email !== 'string') {
    res.status(404);
    throw new Error('Provide input as a String for email');
  }
  if (phoneNumber && typeof phoneNumber !== 'string') {
    res.status(404);
    throw new Error('Provide input as a String for phone number');
  }
  if (address && typeof address !== 'string') {
    res.status(404);
    throw new Error('Provide input as a String for address');
  }
  if (description && typeof description !== 'string') {
    res.status(404);
    throw new Error('Provide input as a String for description');
  }

  const newProfile = new Profile(req.body);
  newProfile.save(function(err, result) {
    if (err) res.send(err);
    res.json(result);
  });
};

const getProfile = asyncHandler(async (req, res, next) => {
  console.log(req)
  const profile = await Profile.findById(req.params.profileID);

  if (!profile) {
    res.status(401);
    throw new Error('Not authorized');
  }

  res.status(200).json({
    success: {
      profile: {
        id: profile._id,
        firstName: profile.firstName,
        lastName: profile.lastName,
        gender: profile.gender,
        birthday: profile.birthday,
        email: profile.email,
        phoneNumber: profile.phoneNumber,
        address: profile.address,
        description: profile.description,
      },
    },
  });
});

const updateProfile = (req, res) => {
  Profile.updateOne({ _id: req.query.profileID }, req.body, function(
    err,
    result
  ) {
    if (err) res.send(err);
    res.json(result);
  });
};

module.exports = { getAllProfiles, getProfile, createProfile, updateProfile };
