const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
  
const db = require("./config")
db.sequelize.sync()

require('./routes/router')(app);

const Port = process.env.port||3000

app.listen(Port, function() {
    console.log("Server started on port " + Port)
})