const express = require("express");
const router = express.Router();
const { userRequests, createRequests, updateRequests } = require("../controllers/request");

router.route("/requests").get(userRequests)
router.route("/requests/new").post(createRequest)
router.route("/requests/update").put(updateRequest);

module.exports = router;
