const ApiError = require("./apiError.utils");
const TokenServices = require("../services/token.services")

const Token = new TokenServices();
async function velidate(req, res, next) {
    let token = req.cookies.token || req.headers.cookies;
    if (!token) throw new ApiError(401, "Unauthorized!", "Your are not authorized!");
    const tokenData = await Token.verifyToken(token)
    req.body.ownerId = tokenData.id;
    next();
}

module.exports = velidate;