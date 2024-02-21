const userModel = require("../models/userModel");

class userController {
  //getUser
  async getUser(req, res) {
    try {
      const allUser = await userModel.find({});
      return res.json(allUser);
    } catch (error) {
      throw error;
    }
  }

  //createUser
  async createUser(req, res) {
    try {
      const { name, password, email } = req.body;
      const newUser = new userModel({ name, password, email });
      await newUser.save();
      return res.json({ message: "Create accout successfully" });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new userController();
