import asyncHandler from "express-async-handler";
import AllUsers from '../models/AllUsers'
const User = require("../models/userModel");
const Worker = require("../models/workerModel");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

export const addAdmin = asyncHandler(async(req, res) => {
    
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

export const userLogin = asyncHandler (async (req, res) =>{

    const {email, password} = req.body;
    console.log(email)
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    // comparing password
    const user = await AllUsers.findOne({ email });

    if(user && (await bcrypt.compare(password, user.password))){
        const payload = {
            _id: user._id,email
        };
        
        const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "2h"});
        res.cookie('access_token', token, {
            httpOnly: true
        });

        if(user.userType === 'admin')
            res.status(200).json({_id:user._id, email: user.email});
        
        if(user.userType === 'user'){
            const data = await User.findOne({email});

            if(data)
                res.status(200).json({_id:data._id, name: data.name, email: data.email,imageUrl:data.imageUrl});
            else
                res.status(400);
            
        }

        if(user.userType === 'worker')
        {
            const worker = await Worker.findOne({email});

            if(worker)
                res.status(200).json({_id: worker.id, name: worker.name, email: worker.email,imageUrl:worker.imageUrl});
            else
                res.status(400);
        }

        console.log(`${user} login successfull!`);
    }
    else{
        res.status(401);
        throw new Error("Invalid credentials! Email or password is not valid!");
    }

})