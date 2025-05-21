const usersAdd = require('../models/User')
const {BadRequestError,UnauthenticatedError}= require('../errors/bad-request')
const {StatusCodes} = require('http-status-codes')

const register = async (req, res) => {


    const user = await usersAdd.create({ ...req.body })

    const token = await user.tokenCheck()

    if (!user) {
        throw new BadRequestError('Bad Request')

    }
    res.status(StatusCodes.CREATED).json({user:{name:user.name}, token})
}





const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        throw new BadRequestError('Please provide email and password . . . ')

    }
    const user = await usersAdd.findOne({ email })

     if (!user) {
       throw new BadRequestError('Bad Request')
    }

    const isPasswordCorrect = await user.loginCheck(password)
   
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid password')
    }

    const token = await user.tokenCheck()
    res.status(StatusCodes.OK).json({ user: { user: user.name }, token })
}

module.exports = { login, register }