const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { pageTitle: "Shop" });
});

module.exports = { mainRouter: router };
