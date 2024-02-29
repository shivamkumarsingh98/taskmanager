const express = require('express')
const cors = require('cors');
const bodyparser = require('body-parser')
const cookieParser = require("cookie-parser")

const app = express();

// App configration
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

const userRoute = require("./router/user.route");

app.use("/auth", userRoute)

module.exports = { app }

