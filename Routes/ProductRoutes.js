const express = require("express");
const router = express.Router();
const Product = require("../model/productSchema");

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({message:"Product not found"});
  }
});

module.exports = router;
