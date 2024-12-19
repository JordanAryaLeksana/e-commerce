const controller = require("../controllers/auth.controller.js")

module.exports = function(app){
    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "authorization, Origin, Content-Type, Accept"
        );
        next();
    })
    app.get("/api/auth/register",controller.register)
    app.get("/api/auth/login",controller.login)
}