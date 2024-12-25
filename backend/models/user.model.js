import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Provide name"]
    },
    email:{
        type:String,
        required:[true,"Provide email"],
    },
    phone:{
        type:Number,
        required:[true,"Provide phone"]
    },
    message:{
        type:String,
    }
})

const UserModel=mongoose.model("User",userSchema)

export default UserModel