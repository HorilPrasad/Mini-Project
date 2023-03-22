const express = require("express");
const {
    workerRegistration,
    workerLogin,
    workerProfile,
} = require("../controllers/workerController");

const router = express.Router();
router.route("/register").post(workerRegistration);
router.route("/login").post(workerLogin);
router.route("/profile").get(workerProfile);

module.exports = router;