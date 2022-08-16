const express = require('express')
const router = express.Router()

const {createSuperAdmin,CreateUniAdmin} = require('../controller/superAdmin_controller')

router.route("/create-superadmin").post(createSuperAdmin)

router.route("/create-uniadmin").post(CreateUniAdmin)

module.exports = router