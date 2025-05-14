const liftingModel = require('../models/lift')
const BadRequestError = require('../errors/bad-request')


const createLift = async (req, res) => {

    //req.body.createdBy = req.user.userId
    
        await liftingModel.create(req.body)
        res.status(200).json({ msg: "Lift entry created" })
   
}

const getLift = async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
    }
}

const getAllLifts = async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
    }
}

const deleteLift = async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
    }
}

const updateLift = async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    updateLift,
    deleteLift,
    getAllLifts,
    getLift,
    createLift
}