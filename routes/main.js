const express = require('express')
const router  = express.Router()
const {login,dashBoard} = require('../controllers/main');
const authenticationMiddleWare = require('../middleware/auth')

//There will be an middle-ware for authentication as well setup later

router.route('/dashboard').get(authenticationMiddleWare, dashBoard)

router.post('/login', login)


module.exports = router


