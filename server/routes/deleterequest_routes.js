const express = require('express')
const router = express.Router()

const {CreateDeleteRequest,SetAcceptedValue,GetAllDeleteRequests} = require('../controller/deleterequest-controller')

router.route('/create_delete_request').post(CreateDeleteRequest)

router.route('/set_accepted_value/:deleteid').post(SetAcceptedValue)

router.route('/get_all_delete_requests').get(GetAllDeleteRequests)

module.exports = router