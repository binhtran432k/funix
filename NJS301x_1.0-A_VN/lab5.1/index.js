const express = require("express");
const path = require("path");
const { mainRouter } = require("./routes/main");
const { productRouter } = require("./routes/product");

const PORT = 3000;

const app = express();

app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

app.use(mainRouter);

app.use(productRouter);

app.use((req, res) => {
  res.status(404).render("404.pug");
});

app.listen(PORT, () => {
  console.log(`You are running lab 5.1 on port ${PORT}`);
});
