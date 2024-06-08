const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: String,
    image: String,
    price: Number,
    discount: Number,
    bgcolor: String,
    panelColor: String,
    textColor: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", productSchema);
