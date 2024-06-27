// models/Sale.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saleSchema = new Schema({
  customerName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  productName: { type: String, required: true },
  soldPrice: { type: Number, required: true },
  date: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model("Sale", saleSchema);
