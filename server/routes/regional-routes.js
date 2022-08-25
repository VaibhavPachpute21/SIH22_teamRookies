const express = require('express')
const router = express.Router()

const {CreateRegionalAdmin}  = require('../controller/regionaladmincontroller')

router.route('/create-regional-admin').post(CreateRegionalAdmin)

module.exports = router