const express = require('express')
const router = express.Router()

const {register,login,userinfo,update} = require('../controller/officer_controller')

router.route("/register").post(register)

router.route("/login").post(login)


router.route("/info").post(userinfo)

router.route("/update").post(update)

module.exports = router;