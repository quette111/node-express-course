const jwt = require('jsonwebtoken')
const Model = require('../models/DB')

const createAccount = async(req, res) => {
    const { username, password } = req.body
    

    if(!username || !password) {
        throw new Error(`Must provide username and password`)
    }
    const token = jwt.sign({username}, process.env.JWT_SECRET, {expiresIn:'1h'})

    const create = await Model.create(req.body)
    res.status(200).send({msg:'Successful account creation', token})
}

const landing = async (req, res) => {
 

    res.send({msg: `Hello ${req.body.username}, you have successfully logged on!`})
}

module.exports = {createAccount, landing}