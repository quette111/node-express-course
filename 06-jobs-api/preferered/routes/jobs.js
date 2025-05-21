const express = require('express')
const liftRouter = express.Router() 

const  { updateLift, 
    deleteLift, 
    getAllLifts, 
    getLift, 
    createLift } = require('../controllers/lifts')


liftRouter.route('/').post(createLift).get(getAllLifts)

liftRouter.route('/:id').get(getLift).delete(deleteLift).patch(updateLift)



module.exports = liftRouter