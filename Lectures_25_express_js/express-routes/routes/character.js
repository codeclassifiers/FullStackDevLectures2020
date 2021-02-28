// Step 1: Import express and create an instance of router
const express = require("express");

// 1st Step for writing files:- imported fs module from node.js
const fs = require("fs");
const router = express.Router();

const folderPath = `${__dirname}/data`;
//Step 2: Create Secondary route
router.get("/", function (req, res) {
  res.send("Character secondary path");
});

router.get("/getCharacter", function (req, res) {
  fs.readFile(`${folderPath}/character.json`, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      const dataFromFile = JSON.parse(data);
      console.log("data read from file", dataFromFile);
      res.send({ results: dataFromFile });
    }
  });
});

router.post("/createCharacter", function (req, res) {
  console.log("Data from client side", req.body);
  const characterData = req.body;

  // Use write file method
  fs.writeFile(
    `${folderPath}/character.json`,
    JSON.stringify(characterData),
    function (err) {
      if (err) {
        console.log("Error in writing file", err);
      } else {
        console.log("File written successfully");
        res.send({ result: "File written successfully" });
      }
    }
  );
});

// Step 3: Export the router
module.exports = router;
