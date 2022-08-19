const express = require('express')
const router = express.Router()

const {CreateInstitute,login,GetInstituteData} = require('../controller/institute_controller')

router.route('/create-intitute').post(CreateInstitute)

router.route('/login').post(login)

router.route('/get-institute-data/:institutename').get(GetInstituteData)

module.exports = router