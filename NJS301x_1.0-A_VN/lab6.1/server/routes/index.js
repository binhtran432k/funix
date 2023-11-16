const express = require("express");

const { users } = require("../modals/user");

const router = express.Router();

router.get("/user", (req, res) => {
  res.send([...users]);
});

router.post("/user", (req, res) => {
  const user = req.body.name;
  if (user) {
    users.add(user);
    res.status(201).end();
  } else {
    res.status(400).end();
  }
});

module.exports = { mainRouter: router };
