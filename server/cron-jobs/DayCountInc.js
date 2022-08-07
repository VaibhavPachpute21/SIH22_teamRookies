const { Forward } = require('../models/forward_model')
const {Grievance} = require('../models/grievance_model')
const { User } = require('../models/user_model')

exports.IncDayCount = async (req,res,next) => {
    try {
        const Lt15 = await Grievance.updateMany({day_counter:{$lt:15}},
            {$inc:{day_counter:1}})
        
        if(!Lt15){
            console.log("error")
        }

    } catch (error) {
        res.status(400).send(error.message)
    }
}

exports.ResetAndForward = async (req,res,next) => {
    try {
        const Gt15 = await Grievance.updateMany({day_counter:{$gte:15}},
            {$set:{day_counter:0}})

        if(!Gt15){
            console.log("error")
        }

         const theDocs = await Grievance.find({day_counter:{$gte:15}})
        theDocs.forEach(async (doc)=>{
            const sameUni = await User.findOne({"university":doc.grievant_university,"_id":{$ne:doc.grievant_id}})

            if(!sameUni){
                console.log("not found")
            }
            else{
                console.log(sameUni)
                const setNewReciever = await Grievance.findByIdAndUpdate(doc._id,{$set:{reciever_id:sameUni._id}})            
                if(setNewReciever){
                    console.log("Hey")
                }
            }
        })
         
    } catch (error) {
        res.status(400).send(error.message)
    }
}