const express = require("express");
const router = express.Router();
const request = require("../controllers/request");

router
  .route("/request")
  .get(request.userRequests)
  .post(request.createRequest)
  .put(request.updateRequest);

module.exports = router;
