const { Forward } = require("../models/forward_model")
const {Grievance} = require('../models/grievance_model')
const {Officer} = require('../models/officer_model')
const {ReplyNotify} = require('../messaging/sendMessage')

exports.CreateReply = async (req, res, next) => {

    const {
        message,userType,img_link
    } = req.body


    var currentdate = new Date();
    const datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();

    let obj = {
        message: message,
        DateTime: datetime,
        user_type:userType,
        img_link:img_link
    }


    

    const grievance_id = req.params?.gid
    const reciever_id = req.params?.rid
    
    try {
        const newReply = await Forward.findOneAndUpdate({ "current_reciever": reciever_id, "grievance_id": grievance_id }
                , { $push: { replies: obj } })
            
         const grievance = await Grievance.findOne({"grievance_id":grievance_id})

        const officer = await Officer.findOne({"_id":reciever_id})

         /* if(grievance && officer){
            ReplyNotify(grievance.grievant_name,grievance.grievance_nature,officer?.fullname)
        }  */
  
        if (!newReply) {
            res.status(200).json({
                success: true,
                message: "Couldn't send reply"
            })
            return;

        }
        
        res.status(200).json({
            success: true,
            newReply
        })
      
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })

    }
}

    exports.GetAllForwards = async (req, res, next) => {
        const grievance_id = req.params.id

        try {
            const forwards = await Forward.find({ "grievance_id": grievance_id })
            if (!forwards) {
                res.status(400).json({
                    success: false,
                    message: "Nothing more"
                })
            }
            res.status(200).json({
                success: true,
                forwards
            })
        } catch (error) {
            res.status(400).send(error.message)
        }

    }

    exports.GetUserFromGrievance = async (req,res,next) => {
        const id = req.params.gid
        try {
            const user = await Grievance.find({_id:id})
            if(!user){
                res.status(200).json({
                    success:false,
                    message:"Could not find grievance"
                })
            }
            res.status(200).json({
                success:true,
                user
            })
        } catch (error) {
            res.status(400).json({
                success:false,
                message:error.message
            })
        }
    }