import asyncHandler from "express-async-handler";
import { create, findOneAndDelete, findOne, find } from "../models/userModel";
import { genSaltSync, hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import cookie from "cookie-parser";
const dotenv = require("dotenv").config();
import sendMail from "../controllers/sendMail";
import otpGenerator from 'otp-generator';
import optVerification from "../models/otpVerification";
import { findOne as _findOne, create as _create } from '../models/AllUsers';
const saltRounds = 10;
//@desc Register a user
//@route POST /api/users/register
//@access public

const userRegistration = asyncHandler ( async (req, res) => {

    const {name, phone, email, password, address, imageUrl} = req.body;

    if(!name || !email || !password || !address){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const userAvailable  = await _findOne({ email });

    if(userAvailable){
        res.status(400);
        throw new Error("User already registered with this email!");
    }

    const salt = genSaltSync(saltRounds);

    const hashedPassword = await hash(password, salt);
    console.log("Hashed Password: ", hashedPassword);
    const user = await create( {
        name,
        phone, 
        email,
        address,
        password : hashedPassword,
        imageUrl
    });

    console.log(`${user}\nUser registered successfully!`);

    if(user){
        const addUser = await _create({
            email,
            password:hashedPassword,
            userType:'user'
        })
        if(addUser)
            res.status(201).json({_id:user._id, name: user.name, email: user.email,imageUrl:user.imageUrl});
        else{   
            await findOneAndDelete({email})
            res.status(400);
            throw new Error('Problem in creating user!')
        }
    }
    else{
        res.status(400);
        throw new Error("User data is not valid!");
    }
    // res.status(200).json({message : "user registered!"});
});


//@desc user login
//@route POST /api/users/login
//@access public
const userLogin = asyncHandler ( async (req, res) => {

    const {email, password} = req.body;
    console.log(email)
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    // comparing password
    const user = await findOne({ email });

    if(user && (await compare(password, user.password))){
        const payload = {
            _id: user._id,email
        };
        
        const token = sign(payload, process.env.SECRET_KEY, { expiresIn: "2h"});
        res.cookie('access_token', token, {
            httpOnly: true
        });

        
        res.status(200).json({_id:user._id, name: user.name, email: user.email,imageUrl:user.imageUrl});
        console.log(`${user} login successfull!`);
    }
    else{
        res.status(401);
        throw new Error("Invalid credentials! Email or password is not valid!");
    }

    // res.status(200).json({message : "user login successfull!"});
});

//@desc user profile
//@route GET /api/users/profile
//@access private

const userProfile = asyncHandler ( async (req, res) => {
    const id = req.params;
    console.log("User: ", id);
    const userId = userData._id;
    const user = await findOne({ _id: id});
    console.log(user);
    res.status(200).json(user);
});

//@desc update user
//@route PUT api/user/editUser
//@access private

const editUser = asyncHandler ( async (req, res) => {
    // console.log("editUser: ",  req.user);
   const userId = req.user._id;
   // finding the user 
   const user = await findOne({_id: userId});
    // console.log("user:" ,user);
   if(!user){
        res.status(404);
        throw new Error("User does not exist!");
   }

   // updating data
   const {name, phone, email, password, address} = req.body;

   user.name = name || user.name;
   user.email = email || user.email;
   user.phone = phone || user.phone;
   user.address = address || user.address;


   const salt = genSaltSync(saltRounds);

    const hashedPassword = await hash(password, salt);
   user.password = password ? hashedPassword : user.password;

   console.log("updated");
   const updatedUser = await user.save();
   console.log("saved!");

   if(updatedUser){
    console.log(updatedUser);
       res.status(200).json(updatedUser);
   }
   else{
    res.status(400);
    throw new Error("Unable to update the user's data");
   }

});

//@des get all users
//@route /api/users/getAllUsers
//@access private -admin

const getAllUsers = asyncHandler ( async (req, res) => {
    const allUsers = await find();
    res.status(200).json(allUsers);
});

//@desc delete logged in user
//@route delete /api/users/deleteUser
//@aceess private 

const deleteUser = asyncHandler ( async (req, res) => {
    const user = req.user;
    console.log("inside delete user:", user);
    const userId = user._id;
    const deletedUser = await findOneAndDelete({_id : userId});

    if(!deletedUser){
        res.status(400);
        throw new Error("Unbale to delete the user account");
    }

    res.status(200).json([{message: "User deleted successfully!"}, deletedUser]);
});

//@desc logout user
//@route GET /api/users/logout
//@access public

const userLogout = asyncHandler ( async (req, res) =>{
    console.log("logout");
    res.clearCookie("access_token");
    res.status(200).json({ message: "Logout success!"});
});


export default {
    userRegistration,
    userLogin,
    userLogout,
    userProfile,
    editUser, 
    getAllUsers,
    deleteUser
}; 

