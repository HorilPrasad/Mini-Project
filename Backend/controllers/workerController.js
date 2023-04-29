import asyncHandler from "express-async-handler";
import { create, findOneAndDelete, findOne, find } from "../models/workerModel";
import { findOne as _findOne, create as _create } from "../models/AllUsers";
import { genSaltSync, hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import cookie from "cookie-parser";
const dotenv = require("dotenv").config();
const saltRounds = 10;
//@desc Register a worker
//@route POST /api/workers/register
//@access public

const workerRegistration = asyncHandler ( async (req, res) => {


    const {name, phone, email, password, address, occupation, about, imageUrl} = req.body.Inputs;
    const serviceList = req.body.list;
    if(!name || !email || !password || !address){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const workerAvailable  = await _findOne({ email });

    if(workerAvailable){
        res.status(400);
        throw new Error("Worker already registered with this email!");
    }
    const salt = genSaltSync(saltRounds);

    const hashedPassword = await hash(password, salt);
    console.log("Hashed Password: ", hashedPassword);
    const worker = await create( {
        name,
        phone,
        email,
        address,
        password : hashedPassword,
        occupation,
        serviceList,
        description:about,
        imageUrl
    });


    if(worker){
        const addUser = await _create({
            email,
            password:hashedPassword,
            userType:'worker'
        })
        if(addUser){
            res.status(201).json({_id: worker.id, name: worker.name, email: worker.email, phone: worker.phone, imageUrl: worker.imageUrl});
            console.log(`${worker}\n Worker registered successfully!`);
        }else
        {
            await findOneAndDelete({email});
            res.status(400);
            throw new Error('Problem in creating user');
        }
    }
    else{
        res.status(400);
        throw new Error("Worker data is not valid!");
    }
    // res.status(200).json({message : "worker registered!"});
});


//@desc worker login
//@route POST /api/workers/login
//@access public
const workerLogin = asyncHandler ( async (req, res) => {

    const {email, password} = req.body;

    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    // comparing password
    const worker = await findOne({ email });

    if(worker && (await compare(password, worker.password))){
        const payload = {
            _id: worker._id,
            email
        };
        
        const token = sign(payload, process.env.SECRET_KEY, { expiresIn: "2h"});
        res.cookie('access_token', token, {
            httpOnly: true
        });

        res.status(200).json({_id: worker.id, name: worker.name, email: worker.email});

        console.log(`${worker} login successfull!`);
    }
    else{
        res.status(401);
        throw new Error("Invalid credentials! Email or password is not valid!");
    }

    // res.status(200).json({message : "worker login successfull!"});
});

//@desc worker profile
//@route GET /api/workers/profile
//@access private

const workerProfile = asyncHandler ( async (req, res) => {
    const id = req.params;
    console.log(req.params);
    const worker = await findOne({ _id: id.id});
    console.log(worker);
    res.status(200).json(worker);
});

//@desc update worker
//@route PUT api/worker/editUser
//@access private

const editWorker = asyncHandler ( async (req, res) => {
    // console.log("editUser: ",  req.worker);
   const workerData = req.user;
   const workerId = workerData._id;
   // finding the worker 
   const worker = await findOne({_id: workerId});
    // console.log("worker:" ,worker);
   if(!worker){
        res.status(404);
        throw new Error("Worker does not exist!");
   }

   // updating data
   const {name, phone, email, password, address, occupation, serviceList, description, imageURL} = req.body;

   worker.name = name || worker.name;
   worker.email = email || worker.email;
   worker.phone = phone || worker.phone;
   worker.address = address || worker.address;
   worker.occupation = occupation || worker.occupation;
   worker.serviceList = serviceList || worker.serviceList;
   worker.description = description || worker.description;
   worker.imageURL = imageURL || worker.imageURL;


   const salt = genSaltSync(saltRounds);

    const hashedPassword = await hash(password, salt);
   worker.password = password ? hashedPassword : worker.password;

   console.log("updated", worker);
   const updatedWorker = await worker.save();
   console.log("saved!");

   if(updatedWorker){
    console.log(updatedWorker);
       res.status(200).json(updatedWorker);
   }
   else{
    res.status(400);
    throw new Error("Unable to update the worker's data");
   }

});

//@des get all workers
//@route /api/workers/getAllUsers
//@access private -admin

const getAllWorkers = asyncHandler ( async (req, res) => {
    const allWorkers = await find();
    res.status(200).json(allWorkers);
});

//@desc delete worker
//@route delete /api/workers/delete
//@access private - admin

const deleteWorker = asyncHandler( async (req, res) => {
    const workerData = req.user;
    const workerId = workerData._id;

    const deletedWorker = await findOneAndDelete({_id : workerId});

    if(!deletedWorker){
        res.status(400);
        throw new Error("Unable to delete the worker");
    }

    console.log(deletedWorker);
    res.status(200).json([{message : "Worker deleted successfully"}, deletedWorker]);
});

//@desc logout worker
//@route GET /api/workers/logout
//@access public

const workerLogout = asyncHandler ( async (re, res) =>{
    console.log("logout");
    res.clearCookie("access_token");
    res.status(200).json({ message: "Logout success!"});
});




export default {
    workerRegistration,
    workerLogin,
    workerLogout,
    workerProfile,
    editWorker, 
    getAllWorkers,
    deleteWorker
}; 

