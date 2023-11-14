const express = require("express");
const mainRoutes = require("./routes");
const { setRootDir, getPath } = require("./utils/path");

setRootDir(__dirname);
const app = express();
const port = 3000;

app.use(express.static(getPath("public")));

app.use(mainRoutes);

app.listen(port, () => {
  console.log(`Lab 4.2 app is running on port ${port}`);
});
