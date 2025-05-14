const jwt = require('jsonwebtoken')
const UnauthenticatedError = require('../errors/unauthenticated')

const auth = async (req, res, next) => {

    const token = req.headers.authorization


    if (!token || !token.startsWith('Bearer ')) {
        throw new UnauthenticatedError('Authorization failed, no token provided')
    }

    try {

        const newToken = token.split(' ')[1]
        const payload = jwt.verify(newToken, process.env.JWT_SECRET)
        next()

    } catch (error) {
        throw new UnauthenticatedError('Authorization failed')
    }
}

module.exports = auth