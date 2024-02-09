const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        reqiured:true
    },
    image:{
        type:String,
        require:true
    },
    friendRequests:[
        {
            type:mongoose,Schema,Types,ObjectsId,
            ref:"User"
        }
    ],
    friends:[
        {
            type:mongoose,Schema,Types,ObjectsId,
            ref:"User"
        }
    ],
    sentFriendRequests:[
        {
            type:mongoose,Schema,Types,ObjectsId,
            ref:"User"
        },
    ],
});

const User = mongoose.model("User",userSchema);
module.exports = User


