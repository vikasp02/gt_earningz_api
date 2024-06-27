// routes/sale.js

const express = require("express");
const router = express.Router();
const Sale = require("../models/Sale");

// Create a new Sale
router.post("/", async (req, res) => {
  try {
    const sale = new Sale(req.body);
    await sale.save();
    res.status(201).send(sale);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Read all sales
router.get("/", async (req, res) => {
  try {
    const sales = await Sale.find();
    res.status(200).send(sales);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Read a Single Sale by ID
router.get("/:id", async (req, res) => {
  try {
    const sale = await Sale.findById(req.params.id);
    if (!sale) {
      return res.status(404).send();
    }
    res.status(200).send(sale);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a Sale by ID
router.patch("/:id", async (req, res) => {
  try {
    const sale = await Sale.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!sale) {
      return res.status(404).send();
    }
    res.status(200).send(sale);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a Sale by ID
router.delete("/:id", async (req, res) => {
  try {
    const sale = await Sale.findByIdAndDelete(req.params.id);
    if (!sale) {
      return res.status(404).send();
    }
    res.status(200).send(sale);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
