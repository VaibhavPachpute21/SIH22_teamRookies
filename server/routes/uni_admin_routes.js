const express = require('express')
const router = express.Router()

const {Assign1Aor1B,login} = require('../controller/uni_admin_controller')

router.route("/Create-Officer").post(Assign1Aor1B)

router.route("/login").post(login)

module.exports = router