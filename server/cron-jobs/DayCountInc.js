const { Forward } = require('../models/forward_model')
const { Grievance } = require('../models/grievance_model')
const { Officer } = require("../models/officer_model")
const { SendMessage } = require("../messaging/sendMessage")
const { RegionalOfficer } = require('../models/regional_officers_model')



exports.IncDayCount = async (req, res, next) => {
    try {
        const Lt15 = await Grievance.updateMany({ satisfied: false, assigned_in_role: { $ne: "2" },assigned_in_role: { $ne: "X" }, day_counter: { $lt: 15 } },
            { $inc: { day_counter: 1 } })

        if (!Lt15) {
            console.log("error")
        }

    } catch (error) {
        res.status(400).send(error.message)
    }
}

exports.FindAssignedToTwo = async (req,res,next) => {
    try {
        const role2 = await Grievance.find({"assigned_in_role":"2"})

        role2?.forEach(async (doc)=>{
            if(role2.length > 0){

                const regionalOfficer = await RegionalOfficer.aggregate([
                    {$match:{"region":doc.region}},
                    {$sample:{size:1}}
                ])
                if(regionalOfficer.length > 0){
                    await Forward.create({
                        previous_reciever: "Change",
                        current_reciever: regionalOfficer[0]?._id,
                        grievance_id: doc._id,
                        officer_avatar: regionalOfficer[0]?.avatar,
                        officer_university: regionalOfficer[0]?.university,
                        assigned_to_role: "2"
                    })
                    await Grievance.findByIdAndUpdate(doc._id, { $set: { assigned_in_role: "X" } }, { new: true })
                }
                
            }
        })

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

                const nextOfficer = await Officer.find({
                    "university_nodal_no": currentOfficer.university_nodal_no + 1,
                    "university": currentOfficer.university, role: doc.assigned_in_role
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
                                assigned_to_role: "1B"
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
                                    assigned_to_role: "1B"
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
                            officer_university: nextOfficer[0].university
                        })

                        //  SendMessage(doc.grievant_name,doc.grievance_title,nextOfficer[0]?.fullname) 
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