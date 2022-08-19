const express = require('express')

const router = express.Router()

const {CreateRegionalOfficer,login,GetRegionRelatedGrievances} = require('../controller/regional_officer_controller')

router.route('/create_regional_officer').post(CreateRegionalOfficer)

router.route('/get_all_region_grievances/:region').get(GetRegionRelatedGrievances)

router.route('/login').post(login)


module.exports = router