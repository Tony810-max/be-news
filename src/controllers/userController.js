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

}

module.exports = new userController();
