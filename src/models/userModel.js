const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userModel = new Schema(
  {
    name: String,
    password: String,
    email: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userModel);
