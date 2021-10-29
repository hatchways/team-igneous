'use strict';

const express = require('express');

const router = express.Router();
const profile = require('../controllers/profile');

router
  .route('/')
  .get(profile.getAllProfiles)
  .post(profile.createProfile)
  .put(profile.updateProfile);

router.route('/:profileID').get(profile.getProfile);
router.route('/:profileID/update').put(profile.updateProfile);

module.exports = router;
