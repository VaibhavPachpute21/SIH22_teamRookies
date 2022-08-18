const express = require('express')
const router = express.Router()

const {createSuperAdmin,CreateUniAdmin,login,GetTopThrees,GetSolvedGrievances} = require('../controller/superAdmin_controller')

router.route("/create-superadmin").post(createSuperAdmin)

router.route("/create-uniadmin").post(CreateUniAdmin)

router.route("/login").post(login)

router.route('/get-top-three').get(GetTopThrees)

router.route('/get-solved-grievances').get(GetSolvedGrievances)

module.exports = router