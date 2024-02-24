const AuthController = require("../controllers/AuthController");
const userController = require("../controllers/userController");
const express = require("express");

const router = express.Router();

router.get("/user", userController.getUser);
router.post("/user/sign-up", AuthController.SignUp);
router.post("/user/login", AuthController.Login);
module.exports = router;
