const express = require('express')
const router = express.Router()

const {newMessage} =  require('../controllers/auth')

router.post('/sendmessage', newMessage)

module.exports = router