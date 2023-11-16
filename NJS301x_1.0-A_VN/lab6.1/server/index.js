const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { mainRouter } = require("./routes");

const PORT = 5000;

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(mainRouter);

app.listen(PORT, () => {
  console.log(`Server is listen on port ${PORT}`);
});
