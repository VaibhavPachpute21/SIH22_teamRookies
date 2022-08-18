const { Grievance } = require('../models/grievance_model')
const { Officer } = require("../models/officer_model")
const { Forward } = require("../models/forward_model")
const {FirstSendMessage} = require('../messaging/sendMessage')
const {SendEmail} = require('../sendEmails/index')
exports.CreateGrievance = async (req, res, next) => {
    const { grievant_id, reciever_id, grievant_university, grievance_nature, grievant_name, principal_name, grievance_title, grievance_description, imgs } = req.body

    try {
        const firstOfficerReciever = await Officer.findOne({ "university": grievant_university,"role":"1A" }).sort('university_nodal_no')
        if (!firstOfficerReciever) {
            console.log("No nodal officer for university")
        }

        const newGrievance = await Grievance.create({
            grievant_id: grievant_id, reciever_id: firstOfficerReciever._id,
            grievant_university: grievant_university, imgs: imgs,
            grievance_nature: grievance_nature, principal_name: principal_name, 
            grievant_name:grievant_name,
            grievance_title: grievance_title, grievance_description: grievance_description,
            assigned_in_role:"1A"
            
        })



        if (!newGrievance) {
            res.status(200).json({
                success: false,
                message: "error"
            })
        }
        await Forward.create({
            previous_reciever: "None",
            current_reciever: firstOfficerReciever._id,
            grievance_id: newGrievance._id,
            officer_avatar: firstOfficerReciever.avatar,
            officer_university: firstOfficerReciever.university,
            assigned_to_role:"1A"
        })

         /* await FirstSendMessage(grievant_name,firstOfficerReciever.fullname) */
      /*   await SendEmail(firstOfficerReciever.fullname,grievant_name,grievance_nature) */

        res.status(200).json({
            success: true,
            newGrievance
        })
    } catch (error) {
        res.status(200).send(error.message)
    }
}

exports.GetAllGrievances = async (req, res, next) => {
    const grievant_id = req.params.id

    try {
        const allGrievances = await Grievance.find({ "grievant_id": grievant_id })
        if (!allGrievances) {
            res.status(400).json({
                success: false,
                message: "No grievances yet"
            })
        }
        res.status(200).json({
            success: true,
            allGrievances
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}


exports.EditGrievance = async (req, res, next) => {

    const id = req.params.id
    const { grievant_id, reciever_id, grievance_info, imgs } = req.body

    try {
        const updatedGrievance = await Grievance.findOneAndUpdate({ "_id": id },
            { $set: { grievant_id, reciever_id, grievance_info, imgs } }, { new: true })

        if (!updatedGrievance) {
            res.status(200).json({
                success: false,
                message: "Something went wrong"
            })
        }
        res.status(200).json({
            success: true,
            updatedGrievance
        })

    } catch (error) {
        res.status(200).send(error.message)
    }


}

exports.SatisfiedWithReply = async (req,res,next) => {
    const grievance_id = req.params.id
    const reciever_id = req.params.rid
    const forward_id = req.params.fid

    try {
        const updatedGrievance = await Grievance.findOneAndUpdate({"_id":grievance_id},{$set:{"satisfied":true}})

        const updatedSolveCount = await Officer.findOneAndUpdate({"_id":reciever_id},{$inc:{solve_count:1}})

        const upadateForwardSatisfied = await Forward.findOneAndUpdate({"_id":forward_id},{$set:{satisfied:true}})

        if(!updatedGrievance){
            res.status(200).json({
                success:false,
                message:"Could not update grievance"
            })
        }
        res.status(200).json({
            success:true,
            updatedGrievance
        })
    } catch (error) {
        res.status(200).send(error)
    }

}


exports.DeleteGrievance = async (req, res, next) => {
    const id = req.params.id

    try {
        const deletedGrievance = await Grievance.findByIdAndDelete(id)
        if (!deletedGrievance) {
            res.status(200).json({
                success: false,
                message: "Something went wrong"
            })
        }
        res.status(200).json({
            success: true,
            deletedGrievance
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
}


