const { User } = require('../models/user_model')

exports.register = async (req, res, next) => {
    const { email, password,role,fullname,committee,avatar, banner,phone_number, college_name,university,district,state } = req.body;

    try {
        const user = await User.create({
            email,
            password,
            role,
            fullname,
            committee,
            avatar,
            banner,
            phone_number,
            college_name,
            university,
            district,
            state
        })
        sendToken(user, 201, res);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }


};


exports.login = async (req, res, next) => {
    const { email, password } = req.body
    try {
        if (!email || !password) {
            await res.status(400).json({
                success: true,
                message: "Please provide all credentials"
            })
        }
        const user = await User.findOne({ email }).select("+password")
        if (!user) {
            res.status(401).send({ success: false, message: "Invalid credentials" })
            return;
        }

        const matched = await user.comparePassword(password)
        if (!matched) {
            res.status(404).json({ success: false, message: "Incorrect username or password" })
            return;
        }


        sendToken(user, 201, res);

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

const sendToken = async (user, statusCode, res) => {
    const token = await user.getSignedToken()

    res.status(statusCode).json({
        success: true,
        token
    })
}