const jwt = require('jsonwebtoken')
const UnauthenticatedError = require('../errors/unauthenticated')
const User = require('../models/User')

const auth = async (req, res, next) => {

    const token = req.headers.authorization

    if (!token || !token.startsWith('Bearer ')) {
        throw new UnauthenticatedError('Authorization failed, no token provided')
    }
        const newToken = token.split(' ')[1]

    try {
        const payload = jwt.verify(newToken, process.env.JWT_SECRET)
        req.user = {userId:payload.userId, name:payload.name}
        next()

    } catch (error) {
        throw new UnauthenticatedError('Authorization failed')
    }
}

module.exports = auth