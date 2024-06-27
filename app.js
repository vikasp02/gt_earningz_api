const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const customerRoutes = require("./routes/service");
const saleRoutes = require("./routes/sale");

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://vikas_user:UybHsqBEkTkC5c5i@cluster0.4ml1awv.mongodb.net/customers?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Routes
app.use("/customers", customerRoutes);
app.use("/sales", saleRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
