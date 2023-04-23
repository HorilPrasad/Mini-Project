const { Router } = require("express");
const express = require("express");
const {userFeedback_controller, userFeadback_featch} = require("../controllers/userFeedback.js");
const router = express.Router();

router.route("/feedback").post(userFeedback_controller)
                        .get(userFeadback_featch);

module.exports = router;