const express = require("express");
const app = express();
const port = 3001;
const connect = require("./src/database");
const route = require("./src/routes");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connect();

route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
