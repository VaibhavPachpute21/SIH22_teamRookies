const mongoose = require('mongoose')

const deleteRequestSchema  = new mongoose.Schema({
    grievance_id:{
        type:String
    },
    officer_name:{
        type:String
    },
    officer_id:{
        type:String
    },
    accepted:{
        type:Boolean,
        default:false,
    },
    message:{
        type:String
    }
},{timestamps:true});

const DeleteRequest = mongoose.model('DeleteRequest',deleteRequestSchema)

module.exports = {
    DeleteRequest
}

