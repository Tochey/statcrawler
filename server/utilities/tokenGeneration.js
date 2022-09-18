const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();

const generateAccessToken = (userId, email) => {
    return jwt.sign({id: userId, email},process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:'2h'
    })
 }

const generateRefreshToken = (userId, email) => {
    return jwt.sign({id: userId, email},process.env.REFRESH_TOKEN_SECRET)
}

module.exports.generateAccessToken = generateAccessToken
module.exports.generateRefreshToken = generateRefreshToken


















