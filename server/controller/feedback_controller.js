const {Grievance} = require('../models/grievance_model')

exports.CreateFeedback = async (req,res,next) => {

    const id = req.params.id

    const {happy_with_response_time,reply_helpful_enough,experience,
        notifications_on_time,officer_behaviour_on_call,response_within_15days,
        most_helpful_officer,suggestions} = req.body
        
        try {
            const getGrievance = await Grievance.findById(id)
            if(!getGrievance){
                res.status(200).json({
                    success:false,
                    message:"No such grievance found"
                })
            }
            
        } catch (error) {
            
        }
}