const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {

const auth =  req.headers.authorization
const token = auth.split(" ")[1]

if(!token){

    return res.status(401).json({error: 'No token provided'})
}
try{
   jwt.verify(token, process.env.JWT_SECRET)
 
next()  
} catch(error) {
    res.status(401).json({error: 'Invalid password, try again'})
}

}

module.exports = auth