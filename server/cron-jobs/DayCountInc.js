const {Grievance} = require('../models/grievance_model')

exports.IncDayCount = async (req,res,next) => {
    try {
        const AllGrievances = await Grievance.updateMany({day_counter:{$lt:15}},
            {$inc:{day_counter:1}})
            
        if(!AllGrievances){
            console.log("error")
        }
        console.log(AllGrievances)
    } catch (error) {
        res.status(400).send(error.message)
    }
}