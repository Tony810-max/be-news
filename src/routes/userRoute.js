const userController = require("../controllers/userController");
const express = require("express");

const router = express.Router();

router.get("/user", userController.getUser);
router.post("/user/create", userController.createUser);

module.exports = router;
