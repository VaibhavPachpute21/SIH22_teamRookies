
const express = require('express')
const router = express.Router()

const {register,login,update,userinfo} = require('../controller/user_controller')
const {protect} = require('../middleware/auth')
const {Verify} = require('../controller/private_controller') 
router.route("/register").post(register)

router.route("/login").post(login)

router.route("/update").post(update)

router.route("/get-user/:id").get(userinfo)

router.route("/private").get(protect,Verify)

/* 
router.route("/forgotpassword").post(forgotpassword)
router.route("/resetpassword/:resetToken").post(resetpassword)
 */

module.exports = router;