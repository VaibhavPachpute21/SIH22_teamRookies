const { Officer } = require('../models/officer_model')

exports.Assign1Aor1B = async (req, res, next) => {
    const { email, password, role, fullname, committee, avatar, banner, phone_number, college_name, university, district, state } = req.body;

    try {
        if (role === "1A") {
            const findUserWithUniAndMax = await Officer.findOne({ "university": university, "role": "1A" }).sort('-university_nodal_no')
            if (findUserWithUniAndMax) {
                let max = findUserWithUniAndMax.university_nodal_no

                const newUser = await Officer.create({
                    email, password, role, fullname, committee, avatar, banner, phone_number, college_name, university, district, state
                })

                if (newUser) {
                    await Officer.findByIdAndUpdate(newUser._id, { $set: { university_nodal_no: max + 1 } })
                }
                else {
                    console.log("error")
                }

                sendToken(newUser, 201, res);
            }
            else {
                const newUser = await Officer.create({
                    email, password, role, fullname, committee, avatar, banner, phone_number, college_name, university, district, state
                })
                sendToken(newUser, 201, res);
            }
        }
        else if (role === "1B") {
            const findUserWithUniAndMax = await Officer.findOne({ "university": university, "role": "1B" }).sort('-university_nodal_no')
            if (findUserWithUniAndMax) {
                let max = findUserWithUniAndMax.university_nodal_no

                const newUser = await Officer.create({
                    email, password, role, fullname, committee, avatar, banner, phone_number, college_name, university, district, state
                })

                if (newUser) {
                    await Officer.findByIdAndUpdate(newUser._id, { $set: { university_nodal_no: max + 1 } })
                }
                else {
                    console.log("error")
                }

                sendToken(newUser, 201, res);
            }
            else {
                const newUser = await Officer.create({
                    email, password, role, fullname, committee, avatar, banner, phone_number, college_name, university, district, state
                })
                sendToken(newUser, 201, res);
            }
        }


    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}


const sendToken = async (user, statusCode, res) => {
    const token = await user.getSignedToken()

    res.status(statusCode).json({
        success: true,
        token
    })
}