const { Forward } = require('../models/forward_model')
const { Grievance } = require('../models/grievance_model')
const { Officer } = require("../models/officer_model")
const {SendMessage} = require("../messaging/sendMessage")


exports.IncDayCount = async (req, res, next) => {
    try {
        const Lt15 = await Grievance.updateMany({ satisfied: false, day_counter: { $lt: 15 } },
            { $inc: { day_counter: 1 } })

        if (!Lt15) {
            console.log("error")
        }

    } catch (error) {
        res.status(400).send(error.message)
    }
}

exports.ResetAndForward = async (req, res, next) => {
    try {
        const Gt15 = await Grievance.find({ day_counter: { $gte: 15 } })

        const someData = Gt15
        someData?.forEach(async (doc) => {
            const currentOfficer = await Officer.findById(doc.reciever_id)
            if (currentOfficer) {
                const nextOfficer = await Officer.find({ "university_nodal_no": currentOfficer.university_nodal_no + 1 ,"university":currentOfficer.university})

                try {
                    await Grievance.findOneAndUpdate({ reciever_id: currentOfficer._id }, { $set: { reciever_id: nextOfficer[0]._id } })

                    await Forward.create({
                        previous_reciever: currentOfficer._id,
                        current_reciever: nextOfficer[0]._id,
                        grievance_id: doc._id,
                        officer_avatar: nextOfficer[0].avatar,
                        officer_university: nextOfficer[0].university
                    })

                    SendMessage(doc.grievant_name,doc.grievance_title,nextOfficer[0]?.fullname)
                } catch (error) {
                    /// Some error handling
                }


            }



        })

        if (!Gt15) {
            console.log("error")
        }


        Gt15.forEach(async (doc) => {
            await Grievance.findByIdAndUpdate(doc._id, { $set: { day_counter: 0 } })
        })



    } catch (error) {
        res.status(400).send(error.message)
    }
}