const express = require('express')
const router = express.Router()

const {CreateGrievance,EditGrievance,DeleteGrievance} = require('../controller/grievance_controller')

router.route("/make-grievance").post(CreateGrievance)

router.route("/edit-grievance").post(EditGrievance)

router.route("/delete-grievance").post(DeleteGrievance)

module.exports = router