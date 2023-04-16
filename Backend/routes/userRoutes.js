const express = require("express");
<<<<<<< HEAD
const authentication = require("../middleware/authentication");
const cookieParser = require("cookie-parser");
=======
const userAuth = require("../middleware/userAuth");
const cookieParser = require("cookie-parser")

>>>>>>> 0b2b5b39aad9bea0dc2e7fdb1092058e4c8840bf
const {
    userRegistration,
    userLogin,
    userLogout,
    userProfile,
    editUser,
    getAllUsers,
    deleteUser
} = require("../controllers/userController");

const router = express.Router();
router.use(cookieParser());
router.route("/register").post(userRegistration);
router.route("/login").post(userLogin);
<<<<<<< HEAD
router.route("/profile").get(authentication, userProfile);
router.route("/editUser").put(authentication, editUser);
router.route("/getAllUsers").get(getAllUsers);
router.route("/deleteUser").delete(authentication, deleteUser);
router.route("/logout").post(userLogout);
// find single users
// edit profile
// find all users
// delete users
// user verification model
// node mailer
=======
router.route("/logout", userLogout);
router.get("/profile",userAuth, userProfile);
>>>>>>> 0b2b5b39aad9bea0dc2e7fdb1092058e4c8840bf

module.exports = router;