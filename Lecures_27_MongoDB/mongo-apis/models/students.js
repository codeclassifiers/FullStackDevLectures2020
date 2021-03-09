const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    name: String,
    branch: String,
    rollNo: Number,
  },
  {
    collection: "students",
  }
);

module.exports = mongoose.model("students", studentSchema);
