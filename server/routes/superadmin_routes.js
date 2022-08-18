const express = require('express')
const router = express.Router()

const {createSuperAdmin,CreateUniAdmin,login,GetTopThrees} = require('../controller/superAdmin_controller')

router.route("/create-superadmin").post(createSuperAdmin)

router.route("/create-uniadmin").post(CreateUniAdmin)

router.route("/login").post(login)

router.route('/get-top-three').get(GetTopThrees)

module.exports = router