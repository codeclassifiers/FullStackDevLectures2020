const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GrocerySchema = new Schema(
  {
    groceryItem: String,
    isPurchased: Boolean,
  },
  {
    collection: "GroceryItems",
  }
);

module.exports = mongoose.model("GroceryItems", GrocerySchema);
