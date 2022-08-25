const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({
    solver_officer_id:{
        type:String,
    },
    grievance_id:{
        type:String,
    },
    grievance_nature:{
        type:String,
    },
    grievance_info:{
        type:String,
    },
    time_from_submission:{
        type:String,
    },
    happy_with_response_time:{
        type:Number,
        min:1,
        max:5
    },
    reply_helpful_enough:{
        type:Number,
        min:1,
        max:5
    },
    experience:{
        type:Number,
        min:1,
        max:5
    },
    notifications_on_time:{
        type:Number,
        min:1,
        max:5
    },
    officer_behaviour_on_call:{
        type:Number,
        min:1,
        max:5
    },
    response_within_15days:{
        type:String,
        enum:['Yes','No']
    },
    most_helpful_officer:{
        type:String
    },
    suggestions:{
        type:String
    }

},{timestamps:true})

const Feedback = mongoose.model('Feedback',feedbackSchema)

module.exports = {Feedback}