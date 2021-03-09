const express = require("express");
const router = express.Router();
const characterModel = require("../models/chactersSchema");

router.get("/getData", function (req, res) {
  characterModel.find({}, function (err, data) {
    if (err) {
      console.log("error ocurred", err);
    } else {
      console.log("data from characters collection", data);
      res.send({ results: data });
    }
  });
  //   res.send("Data sent");
});

module.exports = router;
