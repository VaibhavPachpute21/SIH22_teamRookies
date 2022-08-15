const express = require('express')
const router = express.Router()

const {CreateReply,GetAllForwards} = require('../controller/forward_controller')

router.route('/send-reply/:gid/:rid').post(CreateReply)

router.route('/get-forwards/:id').get(GetAllForwards)

module.exports = router
