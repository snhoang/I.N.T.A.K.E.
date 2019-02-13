const express = require("express");
const router = express.Router();
const passport = require("passport")

const userController = require("../controller/userController");

require("./../utils/passport.js")


router.get('/test',
    passport.authenticate('local', { failureRedirect: '/signup' }),
    (req, res) => res.json("IT WORKS")
)

// POST
// @route user/login
// @desc verify user login
// @params email, password
// @response json data consist token,userinfo
router.post("/login", userController.login);


// POST
// @route user/signup
// @desc verify user signup
// @params name, email, password
// @response json data consist token,userinfo
router.post("/signup", userController.signup);

module.exports = router;