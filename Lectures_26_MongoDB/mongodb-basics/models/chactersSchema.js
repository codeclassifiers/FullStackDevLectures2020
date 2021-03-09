// Step 1: Import schema from mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema(
  {
    characterName: String,
    movieName: String,
  },
  {
    collection: "charactersCollection",
  }
);

module.exports = mongoose.model("charactersCollection", characterSchema);
