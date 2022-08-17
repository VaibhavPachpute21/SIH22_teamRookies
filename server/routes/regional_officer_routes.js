const express = require('express')

const router = express.Router()

const {CreateRegionalOfficer,login} = require('../controller/regional_officer_controller')

router.route('/create_regional_officer').post(CreateRegionalOfficer)

router.route('/login').post(login)


module.exports = router