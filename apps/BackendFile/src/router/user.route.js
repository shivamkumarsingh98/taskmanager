const { Router } = require("express");
const { register, login } = require('../controller/user.controller');
const { asyncHandler } = require('../utils/asyncHandler');

const router = Router();

router.route("/register").post(asyncHandler(register));
router.route("/login").post(asyncHandler(login));

module.exports = router;