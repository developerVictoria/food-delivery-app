import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName:{
        type:String, 
        required: true,
    }, 
    username:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true,
        minlength:8,
    },
    profilePic:{
        type:String,
        default:""
    }
})

const User = mongoose.model("User", userSchema);

export default User;