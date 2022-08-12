const { Forward } = require("../models/forward_model")



exports.CreateReply = async (req,res,next) => {
    const {
        message
    } = req.body
    const grievance_id = req.params.id
    const reciever_id = '62f1181e5cb40cd0012cd755'

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