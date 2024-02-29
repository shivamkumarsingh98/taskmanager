const mongoose = require('mongoose')

const  Schema = mongoose.Schema

const resuser = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    }
})

const USERRES = mongoose.model("USERRES", resuser)
module.exports = USERRES