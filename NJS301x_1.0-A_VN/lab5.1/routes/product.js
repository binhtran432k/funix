const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res) => {
  res.render("add-product", { pageTitle: "Add Product" });
});

module.exports = { productRouter: router };
