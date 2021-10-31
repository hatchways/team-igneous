const express = require("express");
const router = express.Router();
const { userRequests, createRequest, updateRequest } = require("../controllers/request");

router.route("/all").get(userRequests)
router.route("/new").post(createRequest)
router.route("/update").put(updateRequest);

module.exports = router;
