const asyncHandler = require("express-async-handler");
const AllUsers = require('../models/AllUsers')
const User = require("../models/userModel");
const Worker = require("../models/workerModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

 const addAdmin = asyncHandler(async(req, res) => {
    
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = await bcrypt.hash(req.password, salt);
    const user = await AllUsers.create({
        email:req.email,
        password:hashedPassword,
        userType:'admin'
    });
    if(user)
        res.status(200);
    else
        res.status(400);

})

module.exports = {addAdmin}