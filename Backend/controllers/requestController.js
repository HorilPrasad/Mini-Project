const Worker = require("../models/workerModel");
const Request = require("../models/Request");
const AllUsers = require('../models/AllUsers'); 
const asyncHandler = require("express-async-handler");

const addRequest = asyncHandler (async (req,res)=>{

    const { toWorkerId, fromUserId } = req.body;
    const newRequest = new Request({
        from: fromUserId,
        to: toWorkerId
      });
    
    try {
        await newRequest.save();
    
        if(newRequest)
            res.status(200).json({message:"Request send!"});
        else
            res.status(400).json({message:"Already requested!"})
    } catch (error) {
        res.status(409).json({message:"Already requested!"})
        console.log(error)
    }
})

const requests = asyncHandler ( async(req,res) =>{
    const {id} = req.params;
    const requests = await Request.find({ to: id }).populate('from');
    
    res.status(200).json(requests);
   
})

module.exports = {addRequest,requests};