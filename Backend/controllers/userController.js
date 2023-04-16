const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
const dotenv = require("dotenv").config();
const saltRounds = 10;
//@desc Register a user
//@route POST /api/users/register
//@access public

const userRegistration = asyncHandler ( async (req, res) => {

    const {name, phone, email, password, address} = req.body.Inputs;
    const imageUrl = req.body.imageUrl;
    console.log(req.body);
    if(!name || !email || !password || !address){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    console.log('hello')
    // const userAvailable  = await User.findOne({ email });

    // if(userAvailable){
    //     res.status(400);
    //     throw new Error("User already registered with this email!");
    // }
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    try {
        const user = await User.create( {
            name,
            email,
            password : hashedPassword,
            phone,
            address,
            imageUrl
        });

        console.log(`${user}\nUser registered successfully!`);

        if(user){
            res.status(201).json({_id: user.id, name: user.name, email: user.email, phone: user.phone, address: user.address,imageUrl:user.imageUrl});
        }
        else{
            res.status(400);
            throw new Error("User data is not valid!");
        }
    } catch (error) {
        res.status(400).send(error);

    }

    
    // res.status(200).json({message : "user registered!"});
});


//@desc user login
//@route POST /api/users/login
//@access public
const userLogin = asyncHandler ( async (req, res) => {

    const {email, password} = req.body;
    
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    try {
        const user = await User.findOne({ email: email });
       
        if (user && (await bcrypt.compare(password,user.password)) ) {
            const token = jwt.sign(
                {_id:user._id, email },
                process.env.SECRET_KEY,
                {
                    expiresIn: "2h"
                }
            ); 
            res.cookie("access_token", token).status(200);
            res.status(200).json(
                user);
            
        } else {
            
            res.status(401).send("Invalid User");
            
        }

    } catch (error) {
        res.status(401).send(error)
    }
});

//@desc logout user
//@route GET /api/users/logout
//@access public

const userLogout = asyncHandler ( async (req, res) =>{
    res.clearCookie("access_token");
    res.status(200).json({ message: "Logout success!"});
})

//@desc user profile
//@route GET /api/users/profile
//@access private

const userProfile = asyncHandler (async (req, res) => {
    res.status(200).json({status:200});
    
});
module.exports = {
    userRegistration,
    userLogin,
    userLogout,
    userProfile,
}; 

