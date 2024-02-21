const express = require("express");
const app = express();
const port = 3001;
const connect = require("./src/database");

connect();

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
