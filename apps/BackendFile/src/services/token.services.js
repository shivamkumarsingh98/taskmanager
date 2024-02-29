const jwt = require('jsonwebtoken');

class TokenServices {
    async generateToken(id) {
        const token = await jwt.sign({ id }, process.env.JWT_TOKEN_KEY)
        return token;
    }

    async verifyToken(token) {
        const tokenData = await jwt.verify(token, process.env.JWT_TOKEN_KEY)
        return tokenData;
    }
}

module.exports = TokenServices;