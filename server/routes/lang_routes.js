const express = require('express')
const router = express.Router()

const {GetUserLanguage}=require('../controller/lang_controller')

router.route('/get_lang/:id/:role').get(GetUserLanguage)

module.exports=router

