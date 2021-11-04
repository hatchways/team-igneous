const express = require("express");
const router = express.Router();
const { userRequests, createRequest, updateRequest } = require("../controllers/request");

router.route("/new").post(createRequest)
router.route("/update").put(updateRequest);
router.route("/requests").get(userRequests);

module.exports = router;
