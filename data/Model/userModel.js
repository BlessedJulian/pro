import mongoose from "mongoose";

const details = mongoose.Schema({

    username:{
        type: String,
        reqiure: [true, 'username is required']
    },

    address:{
        type: String,
        reqiure: [true, 'address is required']
    },
    phone:{
        type: String,
        reqiure: [true, 'phone is required']
    }
},{timestamps:true})

export const studentDetails = mongoose.model('students', details)