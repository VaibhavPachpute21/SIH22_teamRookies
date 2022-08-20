const {Grievance} = require('../models/grievance_model')
const {Feedback} = require('../models/feeback_model')
const {Forward} = require('../models/forward_model')
const {Officer} = require('../models/officer_model')
const {RegionalOfficer} = require('../models/regional_officers_model')
exports.CreateFeedback = async (req,res,next) => {

    const id = req.params.id

    const {happy_with_response_time,reply_helpful_enough,experience,
        notifications_on_time,officer_behaviour_on_call,response_within_15days,
        grievance_id,
        most_helpful_officer,suggestions} = req.body
        
        try {
            const getGrievance = await Grievance.findById(id)
            if(!getGrievance){
                res.status(200).json({
                    success:false,
                    message:"No such grievance found"
                })
            }
            const feedback = await Feedback.create({
                grievance_id,
                happy_with_response_time,reply_helpful_enough,experience,
        notifications_on_time,officer_behaviour_on_call,response_within_15days,
        most_helpful_officer,suggestions
            })

            if(!feedback){
                res.status(200).json({
                    success:false,
                    message:"Could not submit feedback"
                })
            }
            res.status(200).json({
                success:false,
                feedback
            })
            
        } catch (error) {
            res.status(400).json({
                success:false,
                message:error.message
            })
        }
}


exports.MostHelpfulOfficer = async (req,res,next) =>{
    const id = req.params.gid
    try {
        const allForwards = await Forward.find({"grievance_id":id})
        
        
        const officers = await Promise.all(allForwards.map(async (doc) => {
            const officers = await Officer.find({_id:doc.current_reciever})
            const regional = await RegionalOfficer.find({_id:doc.current_reciever})
            
            return officers[0]
          }));

          const regional = await Promise.all(allForwards.map(async (doc) => {
            const regional = await RegionalOfficer.find({_id:doc.current_reciever})
            
            return regional[0]
          }));
       
        
            res.status(200).json({
                success:true,
                officers,
                regional
            })
        
        

    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}