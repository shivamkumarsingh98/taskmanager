const User = require("../model/user.model");
const ApiError = require("../utils/apiError.utils");

class DB_Functions {
    async findOne(email) {
        const user = await User.findOne({ email });
        return user;
    }

    async createUser(name, email, password) {
        try {
            const user = await User.create({ name, email, password });
            return user;
        }
        catch (error) {
            throw new ApiError(401, "Couldn't create user!", "Something went wrong while creating a user!")
        }
    }
}

module.exports = DB_Functions;