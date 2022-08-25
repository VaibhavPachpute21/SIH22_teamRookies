const {RegionalAdmin} = require('../models/regional-model')

exports.CreateRegionalAdmin = async (req,res,next) => {

    const { email,
    password,
    fullname,
    avatar,
    banner,
    phone_number,
    university,
    district,
    state}= req.body
    try {
        const newAdmin = await RegionalAdmin.create({
            email,password,fullname,avatar,banner,phone_number,university,district,state
        })

        if(!newAdmin) {
            res.status(200).json({
                success: false,
                message:"An error has occured"
            })
        }
        res.status(200).json({
            success: true,
            newAdmin: newAdmin
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message})       
    }
}