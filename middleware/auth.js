const jwt = require('jsonwebtoken')
const {UnauthenticatedError} = require('../errors')

const authenticationMiddleWare = async(req, res, next)=>{
    console.log(req.headers.authorization);

    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new   ('Invalid credientials, no token provided')
    }

    const token = authHeader.split(' ')[1]

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)   
        const {id, username} = decoded
        req.user = {id, username}
        next()//Pass the controll to the next middleware function or to the next http - request

    } catch(error){
        throw new UnauthenticatedError('No authorized access to this route')
    }
}

module.exports = authenticationMiddleWare