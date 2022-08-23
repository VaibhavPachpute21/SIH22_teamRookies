import fetch from 'node-fetch';
const {Feedback} = require('../models/feeback_model')

exports.ProvideData = async () => {
    try {
        const feedbacks = Feedback.find({})
        if(feedbacks.length >0){
            

        }
    } catch (error) {
        console.log(error)
    }
}