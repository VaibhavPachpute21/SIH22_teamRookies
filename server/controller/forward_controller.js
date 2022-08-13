const { Forward } = require("../models/forward_model")



exports.CreateReply = async (req,res,next) => {
    const {
        message
    } = req.body
    const grievance_id = req.params.id
    const reciever_id = '62f118195cb40cd0012cd752'

    const obj = {
        message:message,
        DateTime:"093-04"
    }

    try {
        const newReply = await Forward.findOneAndUpdate({"current_reciever":reciever_id,"grievance_id":grievance_id}
        ,{$push:{replies:obj}})

        if(!newReply){
            res.status(400).json({
                success:true,
                message:"Couldn't send reply"
            })
            return;
        }
        res.status(200).json({
            success:true,
            newReply
        })
        return;
    } catch (error) {
        res.status(400).send(
            error.message
        )
    }


}

exports.GetAllForwards = async (req,res,next) => {
    const grievance_id = req.params.id

    try {
        const forwards = await Forward.find({"grievance_id":grievance_id})
        if(!forwards){
            res.status(400).json({
                success:false,
                message:"Nothing more"
            })
        }
        res.status(200).json({
            success:true,
            forwards
        })
    } catch (error) {
        res.status(400).send(error.message)
    }

}