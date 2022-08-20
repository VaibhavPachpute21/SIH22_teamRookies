const express = require('express')
const router = express.Router()

const {CreateFeedback,MostHelpfulOfficer} = require('../controller/feedback_controller')

router.route('/send-feedback').post(CreateFeedback)

router.route('/forwarded-officers/:gid').get(MostHelpfulOfficer)

module.exports = router