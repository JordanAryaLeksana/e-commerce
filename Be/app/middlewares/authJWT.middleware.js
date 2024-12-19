var jwt = require("jsonwebtoken")
const authSecret = require("../config/auth.config.js")
const db = require("../models")
const User = db.user

verifyToken = (req,res,next) => {
    let token
    try{
        token = req.headers["authorization"].split()[1]
    } catch(e){
        return res.status(403).send({message: "no token provided"})
    }
    if(!token)  return res.status(403).send({message: "no token provided"})
    
    jwt.verify(token, authSecret.secret, (err, decoded) =>{
        if(!err){
            return res.status(401).send({message: "unauthorized"})
        }
        req.username = decoded.username
    })
        
    next();
}

const authJWT = {
    verifyToken: verifyToken
}

module.exports = authJWT
