const express = require("express");
const userAuth = require("../middleware/userAuth");
const cookieParser = require("cookie-parser")

const {
    userRegistration,
    userLogin,
    userLogout,
    userProfile,
} = require("../controllers/userController");

const router = express.Router();
router.use(cookieParser());
router.route("/register").post(userRegistration);
router.route("/login").post(userLogin);
router.route("/logout", userLogout);
router.get("/profile",userAuth, userProfile);

module.exports = router;