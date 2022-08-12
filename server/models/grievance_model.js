const mongoose = require('mongoose')


const grievanceSchema = new mongoose.Schema({
    grievant_id: {
        type: String,

    },
    reciever_id: {
        type: String,

    },
    grievance_nature: {
        type: String,

    },
    principal_name: {
        type: String,

    },
    grievance_title: {
        type: String,

    },
    grievance_description: {
        type: String,

    },
    grievant_university: {
        type: String,

    },
    imgs: {
        type: Array
    },
    day_counter: {
        type: Number,
        default: 0
    },
    satisfied_count: {
        type: Number,
        default: 0
    },
    satisfied: {
        type: Boolean,
        default: false
    },

}, { timestamps: true })

const Grievance = mongoose.model("Grievance", grievanceSchema)



module.exports = { Grievance }