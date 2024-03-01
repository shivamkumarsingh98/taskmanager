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
const todoRoute = require("./router/todo.route");
const velidate = require("./utils/velidation.utils");
const { asyncHandler } = require('./utils/asyncHandler');
const shareRoute = require("./router/share.route")

app.use("/auth", userRoute);
app.use("/dashboard", asyncHandler(velidate), todoRoute);
app.use("/share", shareRoute);

module.exports = { app }

