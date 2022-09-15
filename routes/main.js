const express = require('express')
const router  = express.Router()
const {login,dashBoard} = require('../controllers/main');

//There will be an middle-ware for authentication as well setup later

router.get('/dashboard',dashBoard)

router.post('/login', login)


module.exports = router


