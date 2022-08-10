const mongoose = require('mongoose')


const replySchema = new mongoose.Schema({
    grievance_id:{
        type:String,
        required:true
    },
    grievant_id:{
        type:String,
        required:true
    },
    replier_officer_id:{
        type:String,
        required:true
    },
    reply_title:{
        type:String,
        maxlength:100,
        required:true,
    },
    reply_description:{
        type:String,
        required:true
    },
    satisfied:{
        type:Boolean,
        default:false
    }
},{timestamps:true})


const Reply = mongoose.model('Reply',replySchema)

module.exports = {Reply}