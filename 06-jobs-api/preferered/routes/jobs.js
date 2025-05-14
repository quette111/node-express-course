const express = require('express')
const liftRouter = express.Router() 
const auth = require('../middleware/authentication')
const  { updateLift, 
    deleteLift, 
    getAllLifts, 
    getLift, 
    createLift } = require('../controllers/lifts')



liftRouter.post('/', createLift)

module.exports = liftRouter