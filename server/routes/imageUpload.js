"use strict";

const express = require("express");
const router = express.Router();
const image = require("../controllers/imageUploader");

router.route("/").post(image.imageUpload);

module.exports = router;
