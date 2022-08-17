const express = require('express')
const router = express.Router()

const {CreateInstitute,login} = require('../controller/institute_controller')

router.route('/create-intitute').post(CreateInstitute)

router.route('/login').post(login)

module.exports = router