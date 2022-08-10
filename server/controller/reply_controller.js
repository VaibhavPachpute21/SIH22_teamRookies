const { Reply } = require("../models/replies_model")

exports.SendReply = async (req, res, next) => {
    const { grievance_id,
        grievant_id,
        replier_officer_id, reply_title,
        reply_description, satisfied } = req.body

    try {
        const newReply = await Reply.create({
            grievance_id: grievance_id,
            grievant_id: grievant_id,
            replier_officer_id: replier_officer_id,
            reply_title: reply_title,
            reply_description: reply_description, satisfied: satisfied
        })
        if (!newReply) {
            res.status(200).json({
                success: false,
                message: "Couldn't send reply"
            })
        }
        res.status(200).json({
            success: true,
            message: "Reply sent"
        })
    } catch (error) {   
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}