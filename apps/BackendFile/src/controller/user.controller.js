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
    user.password = null;
    const token = await Token.generateToken(user.id)
    const options = {
        httpOnly: true,
        secure: true,
    };
    res.cookie("cookies", token, options);
    if (user) res.status(200).json({ message: "Success", user, token });
}

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.login(email, password);
    user.password = null;
    const token = await Token.generateToken(user.id);
    const options = {
        httpOnly: true,
        secure: true,
    };
    res.cookie("cookies", token, options);
    res.status(200).json({ message: "Loged In", user, token });
}

module.exports = { register, login };