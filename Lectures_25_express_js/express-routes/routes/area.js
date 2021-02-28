const express = require("express");

const router = express.Router();

router.get("/triangle", function (req, res) {
  console.log("values from client", req.query);
  const base = req.query.base;
  const height = req.query.height;
  const areaOfTriangle = 0.5 * base * height;
  res.send({
    result: areaOfTriangle,
  });
});

module.exports = router;
