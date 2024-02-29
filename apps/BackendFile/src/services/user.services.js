const DB_Functions = require("../database/db.function");
const ApiError = require("../utils/apiError.utils");

class UserServices {
    DbFunctions = new DB_Functions();
    async register(name, email, password) {
        const checkUser = await this.DbFunctions.findOne(email);
        if (checkUser) throw new ApiError(401, "Email alredy in use", "Your email in already in user!");
        const user = await this.DbFunctions.createUser(name, email, password);
        return user;
    }
};

module.exports = UserServices;