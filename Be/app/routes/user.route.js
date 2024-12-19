const controller = require("../controllers/user.controller.js")
const authJWT = require("../middlewares/authJWT.middleware.js")
module.exports = function(app){
    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "authorization, Origin, Content-Type, Accept"
        );
        next();
    })
    app.get("/api/user", [
        authJWT.verifyToken
    ],controller.get)
}