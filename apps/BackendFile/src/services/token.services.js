const jwt = require('jsonwebtoken');

class TokenServices {
    async generateToken(id) {
        try {
            const token = await jwt.sign({ id }, process.env.JWT_TOKEN_KEY)
            return token;
        } catch (error) {
            return {
                message: "Something went wrong while generating token!",
                error: error
            }
        }
    }

    async verifyToken(token) {
        try {
            const tokenData = await jwt.verify(token, process.env.JWT_TOKEN_KEY)
        }
        catch (error) {
            return {
                message: "Something went wrong while verifying token!",
                error: error
            }
        }
    }
}

module.exports = TokenServices;