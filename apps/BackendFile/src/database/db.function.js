const User = require("../model/user.model");

class DB_Functions {
    async findOne(email) {
        const user = await User.findOne({ email });
        return user;
    }

    async createUser(name, email, password) {
        const user = await User.create({ name, email, password });
        return user;
    }
}

module.exports = DB_Functions;