exports.createSuperAdmin=(req,res,next)=>{
    const {email,fullname,gender,dob,role,password,phone_number}=req.body;
    try {
        const user = await User.create({
            email:email,fullname:fullname,gender:gender,dob:dob ,role:role ,password:password ,phone_number:phone_number
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