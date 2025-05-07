const express = require('express');
const router = express.Router()
const {createAccount, landing} = require('../controllers/main')
const auth = require('../middleware/auth')

router.route('/createAccount').post(createAccount)

router.route('/landing').get(auth, landing)

module.exports = router