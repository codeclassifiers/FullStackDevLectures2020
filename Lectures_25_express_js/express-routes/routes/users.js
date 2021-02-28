const express = require("express");
const router = express.Router();

// Secondary router paths
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("sending user data");
});

// secondary users path
router.get("/getData", function (req, res) {
  res.send("user data will be sent here");
});

module.exports = router;
