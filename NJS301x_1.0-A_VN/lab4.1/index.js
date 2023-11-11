const express = require("express");
const app = express();
const port = 3000;

app.get("/", (_, res) => {
  res.send("<p>The Middleware that handles just /</p>");
});

app.get("/users", (_, res) => {
  res.send("<p>The Middleware that handles just /users</p>");
});

app.listen(port, () => {
  console.log(`Lab 4.1 app is running on port ${port}`);
});
