
//check username, password in post(login) request
//if exist create new JWT
//send back to front-end
//setup authentication so only the request with JWT can access the dash board

const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const login = async (req,res)=>{
    const{username, password} = req.body
    //mongoode validation
    //JOI
    //check in controller

    if(!username || !password){
        throw new CustomAPIError('Please provide email and password', 400)
    }
    
    //id-> only for dummy in real world we take it from mangodb
    const id = new Date().getDate()
    const token = jwt.sign({id, username},process.env.JWT_SECRET, {expiresIn: '30d'})


    res.status(200).json({msg: 'user created', token})
}

const dashBoard = async (req, res) =>{
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg: `Hello , Hari Haran`, 
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    login,
    dashBoard
}