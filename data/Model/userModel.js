import mongoose from "mongoose";

const details = mongoose.Schema({

    username:{
        type: String,
        reqiured: [true, 'username is required']
    },

    address:{
        type: String,
        reqiured: [true, 'address is required']
    },
    phone:{
        type: String,
        reqiured: [true, 'phone is required']
    }
},{timestamps:true})

export const studentDetails = mongoose.model('students', details)