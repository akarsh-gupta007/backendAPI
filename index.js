const express = require("express")
const connection = require("./config/db.js")
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require("cors")
app.use(cors())

app.use(express.json())

const alienRouter = require('./router/userdetails')

app.use("/", alienRouter)


app.listen(9000, async () => {
    try {
        await connection;
        console.log("server started")
    }
    catch (err) {
        console.log(err)
    }
})