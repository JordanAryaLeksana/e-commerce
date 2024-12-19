
const express = require("express")
const cors = require("cors")
const PORT = process.env.PORT || 8080
const app = express()

const db = require("./app/models")
db.sequelize.sync
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.listen(PORT, ()=> {
    console.log(`${Date.now()} | server is runnning on ${PORT}`)
})

db.sequelize.sync({force: true}).then(() => {
    console.log("DB resync")
})
require("./app/routes/user.route.js")(app);
require("./app/routes/auth.route.js")(app);

app.get("/", (req, res) => {
    res.json({message: "server is online"})
})
