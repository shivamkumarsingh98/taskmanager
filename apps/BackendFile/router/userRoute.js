const express = require('express')
const route = express.Router()
const {register,login} = require('../controler/userControler')
const bodyparser = require('body-parser')

route.use(bodyparser.urlencoded({extended:false}))
route.use(express.json());
route.use(express.urlencoded({extended:true}));

route.post("/register",register);

route.post("/login", login);


module.exports = route