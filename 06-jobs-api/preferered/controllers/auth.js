const usersAdd = require('../models/User')
const BadRequestError = require('../errors/bad-request')

const register = async (req, res) => {


    const user = await usersAdd.create({ ...req.body })

    const token = await user.tokenCheck()

    if (!user) {
        throw new BadRequestError('Bad Request')

    }
    res.status(200).json({ user: { name: user.name }, token })
}





const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        throw new BadRequestError('Please provide email and password . . . ')

    }


    const user = await usersAdd.findOne({ email })
    await user.loginCheck(password)
    if (!user) {
       throw new BadRequestError('Bad Request')
    }
    const token = await user.tokenCheck()
    res.status(200).json({ msg: { user: user.name }, token })


}

module.exports = { login, register }