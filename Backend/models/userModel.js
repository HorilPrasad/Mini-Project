const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    usrname: {
        type: String,
        required: [true, "Plaese add a username!"],
    },

    firstname: {
        type: String,
        required : [true, "Please add the firstname!"],
    },

    lastname: {
        type: String,
    },

    email: {
        type : String,
        required : [true, "Please add the user email"],
        unique : [true, "Email address is already used!"],
    },
    
    phone: {
        type : String,
        required: [true, "Please provide a phone number"],
    },
    password: {
        type : String,
        required: [true, "Please add the user password!"],
    },
}, 
    {
        timestamps : true,
    }
);

module.exports = mongoose.model("user", userSchema);