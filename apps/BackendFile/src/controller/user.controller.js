const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SecretKey = "newuser";
const UserServices = require('../services/user.services')
const TokenServices = require("../services/token.services");
const ApiError = require('../utils/apiError.utils');

const User = new UserServices();
const Token = new TokenServices();

const register = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) throw new ApiError(401, "Confirm Password Error", "Confirm password should be same as password!")
    if (name === "") throw new Error(401, "Name is required!", "Please provide name!")
    if (email === "") throw new Error(401, "Email is required!", "Please provide email!")
    if (password === "") throw new Error(401, "Emial is required!", "Please provide password!")

    const user = await User.register(name, email, password);
    const token = await Token.generateToken(user.id)
    if (user) res.status(200).json({ message: "Success", user, token });
}

const login = async (req, res) => {
    console.log(req.body);

    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(401).json({ message: "User not found" });
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password);
        if (!matchPassword) {
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, SecretKey);
        res.status(200).json({ message: "Login successful", token });

    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { register, login };