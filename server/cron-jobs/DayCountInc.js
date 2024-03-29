const { Forward } = require('../models/forward_model')
const { Grievance } = require('../models/grievance_model')
const { Officer } = require("../models/officer_model")
const { SendMessage } = require("../messaging/sendMessage")
const { RegionalOfficer } = require('../models/regional_officers_model')
const { SendEmail } = require('../sendEmails/index')


exports.SendMessageToForward = async (req, res, next) => {
    try {
        const latestForward = await Forward.find({ message_sent_to_grievant: { $ne: true } }, { message_sent_to_grievant: false }).limit(1).sort({ $natural: -1 })
        if (latestForward.length > 0) {
            latestForward?.forEach(async (doc, i) => {


                if (typeof (doc?.officer_name) !== undefined) {
                    const grievance = await Grievance.findById(doc?.grievance_id)
                    const officer = await Officer.findById(grievance?.reciever_id)
                    // await SendEmail(officer?.email, grievance?.grievant_name, grievance?.grievance_nature)
                    // await SendMessage("User", grievance?.grievance_title, doc?.officer_name)
                    await Forward.findOneAndUpdate({ _id: doc._id }, { $set: { message_sent_to_grievant: true } })
                }
            })
        }

    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
}

exports.IncDayCount = async (req, res, next) => {
    try {
        const Lt15 = await Grievance.updateMany({ satisfied: false, assigned_in_role: { $ne: "2" }, assigned_in_role: { $ne: "X" }, day_counter: { $lt: 15 } },
            { $inc: { day_counter: 1 } })

        if (!Lt15) {
            console.log("error")
        }

    } catch (error) {
        res.status(400).send(error.message)
    }
}

exports.FindAssignedToTwo = async (req, res, next) => {
    try {
        let role2 = await Grievance.find({ "assigned_in_role": "2" })


        role2?.forEach(async (doc) => {
            if (role2.length > 0) {

                const regionalOfficer = await RegionalOfficer.aggregate([
                    { $match: { "region": doc.region } },
                    { $sample: { size: 1 } }
                ])


                {await Forward.create({
                    previous_reciever: "Change",
                    current_reciever: regionalOfficer[0]?._id,
                    grievance_id: doc._id,
                    officer_avatar: regionalOfficer[0]?.avatar,
                    officer_university: regionalOfficer[0]?.university,
                    assigned_to_role: "2",
                    officer_name: regionalOfficer[0]?.fullname,
                    reciever_phone: regionalOfficer[0].phone_number
                })}
                await Grievance.findByIdAndUpdate(doc._id, { $set: { assigned_in_role: "X" } }, { new: true })





            }
        })

    } catch (error) {
        console.log(error)
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

                const nextOfficer = await Officer.find({
                    "university_nodal_no": currentOfficer.university_nodal_no + 1,
                    "university": currentOfficer.university, role: doc.assigned_in_role,
                    officer_on_leave:false
                })

                if (nextOfficer.length == 0) {

                    await Grievance.findByIdAndUpdate(doc._id, { $set: { assigned_in_role: "1B" } }, { new: true })

                    const AllGrievances = await Grievance.find({})

                    AllGrievances?.forEach(async (doc2) => {
                        const TheOfficer = await Officer.find({ role: doc2.assigned_in_role, _id: doc2.reciever_id })

                        if (TheOfficer.length == 0) {
                            const firstBOfficer = await Officer.find({ "role": doc2.assigned_in_role, "university": doc2.grievant_university }).sort('university_nodal_no')

                            await Grievance.findByIdAndUpdate(doc2?._id, { $set: { reciever_id: firstBOfficer[0]?._id } })

                            await Forward.create({
                                previous_reciever: "Change",
                                current_reciever: firstBOfficer[0]?._id,
                                grievance_id: doc2._id,
                                officer_avatar: firstBOfficer[0]?.avatar,
                                officer_university: firstBOfficer[0]?.university,
                                assigned_to_role: "1B",
                                officer_name: firstBOfficer[0]?.fullname,
                                reciever_phone: firstBOfficer[0]?.phone_number
                            })


                        } else {

                            const currentOff = await Officer.find({ role: doc2.assigned_in_role, _id: doc2.reciever_id })

                            let nextNodalNo = currentOff[0]?.university_nodal_no


                            const theNextOfficer = await Officer.find({ "university_nodal_no": nextNodalNo + 1, "university": doc2.grievant_university, "role": doc2.assigned_in_role })
                            if (theNextOfficer.length > 0) {
                                await Grievance.findByIdAndUpdate(doc2._id, { $set: { reciever_id: theNextOfficer[0]?._id } })

                                await Forward.create({
                                    previous_reciever: currentOff[0]._id,
                                    current_reciever: theNextOfficer[0]._id,
                                    grievance_id: doc2._id,
                                    officer_avatar: theNextOfficer[0].avatar,
                                    officer_university: theNextOfficer[0].university,
                                    assigned_to_role: "1B",
                                    reciever_phone: theNextOfficer[0].phone_number
                                })


                            }
                            else {
                                await Grievance.findByIdAndUpdate(doc2._id, { $set: { assigned_in_role: "2" } }, { new: true })
                            }

                        }
                    })



                }
                else {
                    try {

                        await Grievance.findOneAndUpdate({ reciever_id: currentOfficer._id }, { $set: { reciever_id: nextOfficer[0]._id } })


                        await Forward.create({
                            previous_reciever: currentOfficer._id,
                            current_reciever: nextOfficer[0]._id,
                            grievance_id: doc._id,
                            officer_avatar: nextOfficer[0].avatar,
                            officer_university: nextOfficer[0].university,
                            assigned_to_role: "1A",
                            officer_name: nextOfficer[0].fullname,
                            reciever_phone: nextOfficer[0].phone_number
                        })

                        console.log(`Grievance by ${doc.grievant_name} was forwarded to ${nextOfficer[0]?.fullname}`)

                    } catch (error) {
                        /// Some error handling
                    }
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