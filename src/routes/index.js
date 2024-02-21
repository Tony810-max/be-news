const userRoute = require("./userRoute");

const route = (app) => {
  app.use("/api", userRoute);
};

module.exports = route;
