const express = require("express");
const router = express.Router();
const request = require("../controllers/request");

router.route("/requests").get(request.userRequests)
router.route("/new-request").post(request.createRequest)
router.route("/update-request").put(request.updateRequest);

module.exports = router;
