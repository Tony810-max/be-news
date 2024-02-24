const userRoute = require("./authRoute");

const route = (app) => {
  app.use("/api", userRoute);
};

module.exports = route;
