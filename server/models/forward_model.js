const mongoose = require('mongoose')

const forwardSchema = new mongoose.Schema({
    previous_reciever:{
        type:String
    },
    current_reciever:{
        type:String
    },
    grievance_id:{
        type:String
    },
    replies:[
        {
            message:{
                type:String
            },
            DateTime:{
                type:String
            }
        }
    ],
    created_date:{
        type:Date
    }
},{
    timestamps:true
})


const Forward = mongoose.model('Forward',forwardSchema)

module.exports = {
    Forward
}