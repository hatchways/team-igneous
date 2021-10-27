"use strict";

const express = require("express");
const router = express.Router();
const profile = require("../controllers/profile");

router
  .route("/")
  .get(profile.listAllProfiles)
  .post(profile.createProfile)
  .put(profile.updateProfile);

router.route("/:profileID").get(profile.listProfile);

module.exports = router;
