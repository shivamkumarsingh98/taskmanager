const mongoose = require('mongoose')
const bcrypt = require("bcrypt")

const todoShcema = new mongoose.Schema({
    todoId: mongoose.Schema.ObjectId
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    },
    todo: [mongoose.Schema.ObjectId]
}, {
    timestamps: true
})

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next();
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

const User = mongoose.model("user", userSchema)
module.exports = User