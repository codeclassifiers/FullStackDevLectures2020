// Step 1: Import schema from mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Step 2: Writing the schema
const studentsSchema = new Schema(
  {
    name: String,
    branch: String,
    rollNo: Number,
  },
  { collection: "studentsCollection" }
);

// Step 3: Export the schema
module.exports = mongoose.model("studentsCollection", studentsSchema);
