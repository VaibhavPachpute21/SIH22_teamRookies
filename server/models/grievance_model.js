const mongoose = require('mongoose')


const grievanceSchema = new mongoose.Schema({
    grievant_id:{
        type:String,
        required:true,
    },
    reciever_id:{
        type:String,
        required:true
    },
    grievance_info:{
        type:String,
        required:true
    },
    imgs:[
     {
        img_url:{
            type:String
        }
     }   
    ],
    day_counter:{
        type:Number,
        default:0
    },
    satisfied_count:{
        type:Number,
        default:0
    },
    satisfied:{
        type:Boolean,
        default:false
    },
    
},{timestamps:true})

const Grievance = mongoose.model("Grievance",grievanceSchema)

module.exports = {Grievance}