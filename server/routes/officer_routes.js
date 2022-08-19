const express = require('express')
const router = express.Router()

const {register,login,userinfo,update,AllMyGrievances} = require('../controller/officer_controller')

router.route("/register").post(register)

router.route("/login").post(login)


router.route("/info").post(userinfo)

router.route("/update").post(update)

router.route("/mygrievances/:id/:role/:institute").get(AllMyGrievances)

module.exports = router;