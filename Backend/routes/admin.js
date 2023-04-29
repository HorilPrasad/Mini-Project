import express from "express";
import authentication from "../middleware/authentication";
import cookieParser from "cookie-parser";


import {addAdmin} from '../controllers/admin';

const router = express.Router();
router.use(cookieParser());

router.route('/addAdmin').post(addAdmin);

module.exports = router;