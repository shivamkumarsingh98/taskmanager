const express = require('express')
const route = express.Router()
const { register, login } = require('../controller/user.controller')
const bodyparser = require('body-parser')
const { asyncHandler } = require('../utils/asyncHandler')

route.use(bodyparser.urlencoded({ extended: false }))
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

route.post("/register", asyncHandler(register));

route.post("/login", login);


module.exports = route