const mongoose = require('mongoose')

const forwardSchema = new mongoose.Schema({
    previous_reciever:{
        type:String,
        required:true
    },
    current_reciever:{
        type:String,
        required:true
    },
    grievance_id:{
        type:String,
        required:true
    },
    created_date:{
        type:Date,
        required:true
    }
},{
    timestamps:true
})


const Forward = mongoose.model('Forward',forwardSchema)

module.exports = {
    Forward
}