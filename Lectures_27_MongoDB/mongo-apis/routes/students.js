const express = require("express");
const router = express.Router();
const studentSchema = require("../models/students");

/**
 * Post request
 * router.post
 * Mongoose method:= .save
 */
router.post("/createData", function (req, res) {
  console.log(req.body);
  const studentsData = new studentSchema(req.body);
  studentsData.save(function (err) {
    if (err) {
      console.log("Error occurred", err);
    } else {
      console.log("Data saved successfully");
      res.send("student entry added successfully");
    }
  });
});

/**
 * Get request
 * router.get
 * Mongoose method:= .find
 */
router.get("/getDetails", function (req, res) {
  studentSchema.find({}, { _id: 0, __v: 0 }, function (err, data) {
    if (err) {
      console.log("Log of error", err);
    } else {
      res.send({ results: data });
    }
  });
});

/**
 * PUT request
 * router.put
 * Mongoose method:= .findOneAndUpdate
 */
router.put("/updateDetails", function (req, res) {
  console.log(req.body);
  studentSchema.findOneAndUpdate(
    { rollNo: req.body.rollNo },
    { branch: req.body.branch },
    {
      new: true, // return updated doc
      runValidators: true, // validate before update
    },
    function (err) {
      if (err) {
        console.log(err);
      } else {
        res.send("Student details updated successfully");
      }
    }
  );
});

/**
 * DELETE request
 * router.delete
 * Mongoose method:= .findOneAndRemove
 */
router.delete("/deleteStudentDetail", function (req, res) {
  console.log(req.body);
  studentSchema.findOneAndRemove({ rollNo: req.body.rollNo }, function (err) {
    if (err) {
      console.log(err);
    } else {
      res.send("Data deleted successfully");
    }
  });
});

module.exports = router;
