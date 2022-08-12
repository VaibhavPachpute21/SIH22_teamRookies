const express = require('express')
const router = express.Router()

const {CreateReply} = require('../controller/forward_controller')

router.route('/send-reply/:id').post(CreateReply)

module.exports = router
