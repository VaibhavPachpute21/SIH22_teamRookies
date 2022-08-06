
const express = require('express')
const router = express.Router()

const {register,login} = require('../controller/user_controller')

router.route("/register").post(register)

router.route("/login").post(login)
/* 
router.route("/forgotpassword").post(forgotpassword)
router.route("/resetpassword/:resetToken").post(resetpassword)
 */

module.exports = router;