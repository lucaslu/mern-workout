const router = require("express").Router();

// controller functions
const { signupUser, loginUser } = require("../controllers/userController");

// login route
router.route("/login").post(loginUser);

// signup route
router.route("/signup").post(signupUser);

module.exports = router;
