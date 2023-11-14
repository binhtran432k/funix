const express = require("express");
const { getPath } = require("../utils/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(getPath("views", "index.html"));
});

router.get("/users", (req, res, next) => {
  res.sendFile(getPath("views", "users.html"));
});

module.exports = router;
