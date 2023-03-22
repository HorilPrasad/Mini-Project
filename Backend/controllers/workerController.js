const asyncHandler = require("express-async-handler");

const workerRegistration = asyncHandler ( async (req, res) => {
    res.status(200).json({message : "worker registered!"});
});

const workerLogin = asyncHandler ( async (req, res) => {
    res.status(200).json({message : "worker login successfull!"});
});

const workerProfile = async (req, res) => {
    res.status(200).json({message : "worker profile!"});
};

module.exports = { workerRegistration, workerLogin, workerProfile };