import mongoose, { Schema } from "mongoose";

const userModel = new Schema(
  {
    userName: String,
    password: String,
    email: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userModel);
