const {DeleteRequest} = require('../models/delete-request-model')

exports.CreateDeleteRequest = async (req,res,next) => {
    const { grievance_id,
        accepted,
        message,
        officer_name,
        officer_id} = req.body

    try {
        const newDeleteRequest = await DeleteRequest.create({
            grievance_id,
            accepted,
            message,
            officer_name,
            officer_id
        })
        if(!newDeleteRequest){
            res.status(200).json({
            success:false,
            message:"Could not send delete request"
            })
        }
        res.status(200).json({
            success:true,
            newDeleteRequest
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message})
    }
}


exports.SetAcceptedValue = async (req, res, next) => {

    const {message,accepted} = req.body
    const deleteId = req.params.deleteid
    try {
        const newDelete = await DeleteRequest.findOneAndUpdate({ "_id": deleteId},
        {$set: {accepted:accepted,message:message}})

        if(!newDelete) {
            res.status(200).json({success:false,message:"Something went wrong"})
        }
        res.status(200).json({success:true,newDelete})
    } catch (error) {
        res.status(200).json({success:false,message:"Something went wrong"})
    }
}

exports.GetAllDeleteRequests = async (req,res,next) => {
    try {
        const deleteRequests = await DeleteRequest.find({})
        if(!deleteRequests) {
            res.status(200).json({success:false,message:"Could not get delete requests"})
        }
        res.status(200).json({success:true,deleteRequests:deleteRequests})
    } catch (error) {
        res.status(200).json({success:false,message:"Something went wrong"})
    }
}