const db = require("../models")
const authSecret= require("../config/auth.config.js")
var bcrypt = require("bcryptjs")
var bcrypt = require("jsonwebtoken")
const User = db.user

exports.register = (req,res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8) 
     }).then(users => {
        res.send({message: "user registered"})
    }).catch(err => {
        console.log(err);
        res.status(500).send({message: err.message})
    })
}

exports.login = (req,res) => {
    User.findOne({ where:{
        username: req.body.username,
    }}).then(user => {
        if(!user){
            return res.status(401).send({message: "no user found"})
        }
        if(!bcrypt.compareSync(req.body.password, user.password)){
            return res.status(401).send({message: "invalid password"})
        }
        var token = jwt.sign({username: user.username}, authSecret.secret, {
            expiresIs: 86400
        })
        res.send({accessToken: token})
    }).catch(err => {
        console.log(err);
        res.status(500).send({message: err.message})
    })
}