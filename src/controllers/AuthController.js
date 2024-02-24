const userModel = require("../models/userModel");

class AuthController {
  //login
  async Login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({
        email: email,
        password: password,
      });
      if (user) {
        return res.json({
          user: user,
          message: "Login successfully",
        });
      }
      return res.status(400).json({
        message: "invalid email or password ",
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  //createUser
  async SignUp(req, res) {
    try {
      const { name, password, email } = req.body;
      const checkUser = await userModel.findOne({ email: email });
      if (!!checkUser) {
        return res.status(400).json({ message: "Account is duplicated" });
      }
      const newUser = new userModel({ name, password, email });
      await newUser.save();
      return res.json({ message: "Create accout successfully" });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new AuthController();
