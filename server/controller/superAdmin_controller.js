const {UniAdmin} = require('../models/uni_admin_model')
const {SuperAdmin} = require('../models/superadmin_model')
exports.createSuperAdmin = async (req, res, next) => {
    const { email, fullname, gender, dob, role, password, phone_number } = req.body;
    try {
        const user = await SuperAdmin.create({
            email: email, fullname: fullname, gender: gender, dob: dob, role: role, password: password, phone_number: phone_number
        })
        if (!user) {
            res.status(200).json({ success: false, message: "Some error" })
            return;
        }
        const token = await user.getSignedToken()

        res.status(201).json({
            success: true,
            token
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

exports.CreateUniAdmin = async (req, res, next) => {
    const { email, password,role,fullname,committee,avatar, banner,phone_number, college_name,university,district, state,university_nodal_no } = req.body;

    try {
        const newUniAdmin = await UniAdmin.create({
            email:email, password:password,role:role,fullname:fullname,committee:committee,avatar:avatar, banner:banner,phone_number:phone_number, college_name:college_name,university:university,district:district, state:state,
        })

        if(!newUniAdmin){
            res.status(200).json({
                success:false,
                message:"Some error occured during admin creation"
            })
        }

        const token = await newUniAdmin.getSignedToken()

        res.status(200).json({
            success:true,
            token
        })
    
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }

}
