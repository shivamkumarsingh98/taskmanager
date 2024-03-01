const { UserDbFunction } = require("../database/db.function");
const ApiError = require("../utils/apiError.utils");

class UserServices {
    UserDb = new UserDbFunction();
    async register(name, email, password) {
        const checkUser = await this.UserDb.findOne({ email });
        if (checkUser) throw new ApiError(401, "Email alredy in use", "Your email in already in user!");
        const user = await this.UserDb.createUser(name, email, password);
        return user;
    }

    async login(email, password) {
        const user = await this.UserDb.findOne({ email });
        if (!user) throw new ApiError(404, "User not found", "User not found with this email!")
        const checkPassword = await user.isPasswordCorrect(password);
        if (!checkPassword) throw new ApiError(401, "Wrong Password!", "Check your password and try again later!");
        return user;
    }

    async updatePassword({ email, oldPassword, newPassword }) {
        const user = await this.UserDb.findOne({ email });
        if (!user) throw new ApiError(404, "User not found", "User not found with this email!")
        const checkPassword = await user.isPasswordCorrect(oldPassword);
        if (!checkPassword) {
            throw new ApiError(401, "Wrong Password!", "Check your password and try again later!");
        } else {
            user.password = newPassword;
            await user.save({ validateBeforeSave: false });
            return user;
        }
    }
};

module.exports = UserServices;