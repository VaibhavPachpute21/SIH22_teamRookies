const express = require('express')
const router = express.Router()

const {CreateGrievance,EditGrievance,GetAllGrievances,DeleteGrievance} = require('../controller/grievance_controller')

router.route("/make-grievance").post(CreateGrievance)

router.route("/edit-grievance/:id").post(EditGrievance)

router.route("/get-grievances/:id").get(GetAllGrievances)

router.route("/delete-grievance/:id").post(DeleteGrievance)

module.exports = router