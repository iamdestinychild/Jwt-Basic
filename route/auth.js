const express = require('express')
const router = express.Router()

const { login, dashboard } = require('../controller/auth')

const authorize = require('../middleware/auth')

router.route('/login').post(login)
router.route('/dashboard').get(authorize, dashboard)


module.exports = router