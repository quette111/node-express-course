const jwt = require('jsonwebtoken')
const Model = require('../models/DB')
const bcrypt = require('bcrypt')

const createAccount = async(req, res) => {
    const { username, password } = req.body
    

    if(!username || !password) {
        throw new Error(`Must provide username and password`)
    }

    const create = await Model.create(req.body)
    res.status(200).send({msg:'Successful account creation'})
}

const login = async (req, res) => {
    const { username, password } = req.body


   const userFind =  await Model.findOne({username: req.body.username})
   
   if(!userFind){
    return res.status(400).json({msg: 'Invalid email or password'})
   }
   
   const isMatch = await bcrypt.compare(req.body.password, userFind.password)
  
   if(!isMatch){
    return res.status(400).json({msg: 'Invalid email or password'})
   }
   
   const token = jwt.sign({username}, process.env.JWT_SECRET, {expiresIn:'1h'})
   
   res.json({ message: 'Login successful', token });
}







const landing = async (req, res) => {
 

    res.send({msg: `Hello ${req.body.username}, you have successfully logged on!`})
}

module.exports = {createAccount, landing, login}