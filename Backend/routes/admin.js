const express = require("express");
const authentication = require("../middleware/authentication");
const cookieParser = require("cookie-parser");


const {addAdmin} = require('../controllers/admin');

const router = express.Router();
router.use(cookieParser());

router.route('/addAdmin').post(addAdmin);

module.exports = router;