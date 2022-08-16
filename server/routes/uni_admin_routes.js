const express = require('express')
const router = express.Router()

const {Assign1Aor1B} = require('../controller/uni_admin_controller')

router.route("/Create-Officer").post(Assign1Aor1B)

module.exports = router