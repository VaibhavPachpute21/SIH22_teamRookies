
const express = require('express')
const router = express.Router()

const {register,login,update,userinfo} = require('../controller/user_controller')

router.route("/register").post(register)

router.route("/login").post(login)

router.route("/update/:id").post(update)

router.route("/get-user/:id").get(userinfo)

/* 
router.route("/forgotpassword").post(forgotpassword)
router.route("/resetpassword/:resetToken").post(resetpassword)
 */

module.exports = router;