const express = require('express')
const router = express.Router()

const {register} = require('../controller/officer_controller')

router.route("/register").post(register)

module.exports = router;