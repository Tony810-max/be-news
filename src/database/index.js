const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/news");
    console.log("Connect succesfully...!!!");
  } catch (error) {
    console.log("Failed connect...!!!");
  }
};
module.exports = connect;
