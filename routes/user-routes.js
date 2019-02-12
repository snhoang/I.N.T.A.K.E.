const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

// POST
// @route user/login
// @desc verify user login
// @params email, password
// @response json data consist token,userinfo
// router.post("/login", userController.login)

// POST
// @route user/signup
// @desc verify user signup
// @params name, email, password
// @response json data consist token,userinfo
router.post("/signup", userController.signup)

module.exports = router;