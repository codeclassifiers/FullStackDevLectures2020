const express = require("express");
const router = express.Router();
const studentsModel = require("../models/studentsModel");

router.get("/getData", function (req, res) {
  studentsModel.find({}, function (err, data) {
    if (err) {
      console.log("error ocurred", err);
    } else {
      console.log("data from students collection", data);
      res.send({ results: data });
    }
  });
  //   res.send("Data sent");
});

module.exports = router;
