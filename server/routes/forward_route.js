const express = require('express')
const router = express.Router()

const {CreateReply,GetAllForwards,GetUserFromGrievance} = require('../controller/forward_controller')

router.route('/send-reply/:gid/:rid').post(CreateReply)

router.route('/get-forwards/:id').get(GetAllForwards)

router.route('/get_user_from_grievance/:gid').get(GetUserFromGrievance)

module.exports = router
