const { Grievance } = require('../models/grievance_model')
const { Officer } = require("../models/officer_model")
const { Forward } = require("../models/forward_model")

exports.CreateGrievance = async (req, res, next) => {
    const { grievant_id, reciever_id, grievant_university, grievance_nature, principal_name, grievance_title, grievance_description, imgs } = req.body

    try {
        const firstOfficerReciever = await Officer.findOne({ "university": grievant_university }).sort('university_nodal_no')
        if (!firstOfficerReciever) {
            console.log("No nodal officer for university")
        }

        const newGrievance = await Grievance.create({
            grievant_id: grievant_id, reciever_id: firstOfficerReciever._id,
            grievant_university: grievant_university, imgs: imgs,
            grievance_nature: grievance_nature, principal_name: principal_name, grievance_title: grievance_title, grievance_description: grievance_description
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
            officer_university: firstOfficerReciever.university
        })

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


