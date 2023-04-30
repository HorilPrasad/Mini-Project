const { Router } = require("express");
const express = require("express");
const {userFeedback_controller, userFeadback_featch} = require("../controllers/userFeedback.js");
const { userLogin } = require("../controllers/admin.js");
const cookieParser = require("cookie-parser");

const router = express.Router();
router.use(cookieParser());

router.route("/feedback").post(userFeedback_controller)
                        .get(userFeadback_featch);

router.route("/login").post(userLogin)

module.exports = router;