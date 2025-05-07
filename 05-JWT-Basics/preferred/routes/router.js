const express = require('express');
const router = express.Router()
const {createAccount, landing, login} = require('../controllers/main')
const auth = require('../middleware/auth')

router.route('/createAccount').post(createAccount)

router.route('/landing').get(auth, landing)

router.route('/login').post(login)

module.exports = router