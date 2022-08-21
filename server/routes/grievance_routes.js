const express = require('express')
const router = express.Router()

const {CreateGrievance,EditGrievance,GetAllGrievances,DeleteGrievance,SatisfiedWithReply,GetGrievanceStatus} = require('../controller/grievance_controller')

router.route("/make-grievance").post(CreateGrievance)

router.route("/edit-grievance/:id").post(EditGrievance)

router.route("/get-grievances/:id").get(GetAllGrievances)

router.route("/update-satisfied/:id/:rid/:fid").post(SatisfiedWithReply)

router.route("/delete-grievance/:id").post(DeleteGrievance)

router.route("/get-grievance-info/:id").get(GetGrievanceStatus)

module.exports = router