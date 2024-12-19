const db = require("../models")

const User = db.user

exports.get = (req,res) => {
    User.findOne({where: {
        username: req.username
    }}).then(users => {
        res.send({users: users})
    })
}