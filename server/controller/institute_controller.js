const {Institute} = require('../models/institute_model')

exports.CreateInstitute = async (req,res,next) => {
    const {
        institute_name,
        institute_code,
        institute_region,
        institute_district,
        institute_state,
        institute_address,
        institute_pincode,
        institute_std_code,
        institute_year_of_start,
        institute_web_address,
        institute_email,
        institute_university,
        name_of_director,
        director_email,
        director_phone_number,
        user_name,
        user_phone,
        user_email,
        password,
    } = req.body

    try {
        const newInstitute = await Institute.create({
            institute_name:institute_name,
            institute_code:institute_code,
            institute_region:institute_region,
            institute_district:institute_district,
            institute_state:institute_state,
            institute_address:institute_address,
            institute_pincode:institute_pincode,
            institute_std_code:institute_std_code,
            institute_year_of_start:institute_year_of_start,
            institute_web_address:institute_web_address,
            institute_email:institute_email,
            institute_university:institute_university,
            name_of_director:name_of_director,
            director_email:director_email,
            director_phone_number:director_phone_number,
            user_name:user_name,
            user_phone:user_phone,
            user_email:user_email,
            password:password,
        })
        if(!newInstitute){
            res.status(200).json({
                success:false,
                message:"Could not create New institute"
            })
        }
        res.status(200).json({
            success:true,
            newInstitute
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }

}

exports.login = async (req, res, next) => {
    const { email, password } = req.body
    try {
        if (!email || !password) {
            await res.status(400).json({
                success: true,
                message: "Please provide all credentials"
            })
        }
        const officer = await Institute.findOne({ email }).select("+password")
        if (!officer) {
            res.status(401).send({ success: false, message: "Invalid credentials" })
            return;
        }

        const matched = await officer.comparePassword(password)
        if (!matched) {
            res.status(200).json({ success: false, message: "Incorrect username or password" })
            return;
        }


        const token = await officer.getSignedToken()

        res.status(201).json({
            success: true,
            token
        })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}
