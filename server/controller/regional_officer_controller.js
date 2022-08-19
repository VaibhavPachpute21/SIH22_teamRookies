const { Grievance } = require('../models/grievance_model')
const { RegionalOfficer } = require('../models/regional_officers_model')

exports.CreateRegionalOfficer = async (req, res, next) => {
    const { email, password, role, fullname, committee, avatar, banner, phone_number,
        university, district, region, state,
    } = req.body

    try {
        const findUserWithUniAndMax = await RegionalOfficer.findOne({ "university": university, "region": region }).sort('-university_nodal_no')
        if (findUserWithUniAndMax) {
            let max = findUserWithUniAndMax.university_nodal_no

            const newUser = await RegionalOfficer.create({
                email, password, role, fullname, committee, avatar, banner, phone_number, university, district, state, region
            })

            if (newUser) {
                await RegionalOfficer.findByIdAndUpdate(newUser._id, { $set: { university_nodal_no: max + 1 } })
            }
            else {
                console.log("error")
            }

            const token = await newUser.getSignedToken()

            res.status(201).json({
                success: true,
                token
            })
        }
        else {
            const newUser = await RegionalOfficer.create({
                email, password, role, fullname, committee, avatar, banner, phone_number, university, district, state, region
            })
            const token = await newUser.getSignedToken()

            res.status(201).json({
                success: true,
                token
            })
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
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
        const officer = await RegionalOfficer.findOne({ email }).select("+password")
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

exports.GetRegionRelatedGrievances = async (req, res, next) => {

    const region = req.params.region

    try {
        const grievances = await Grievance.find({ assigned_in_role: "2", "region": region })
        if (grievances.length > 0) {
            res.status(200).json({
                success: true,
                grievances
            })
        }

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}