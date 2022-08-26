const express = require('express')
const router = express.Router()

const {register,login,userinfo,update,AllMyGrievances,SetOfficerOnLeave,GetLeaveStatus} = require('../controller/officer_controller')

router.route("/register").post(register)

router.route("/login").post(login)

router.route("/set_on_leave/:id").post(SetOfficerOnLeave)

router.route("/get_current_leave_status/:id").get(GetLeaveStatus)

router.route("/info").post(userinfo)

router.route("/update").post(update)

router.route("/mygrievances/:id/:role/:institute").get(AllMyGrievances)

module.exports = router;