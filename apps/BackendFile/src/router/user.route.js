const { Router } = require("express");
const { register, login, updatePassword } = require('../controller/user.controller');
const { asyncHandler } = require('../utils/asyncHandler');

const router = Router();

router.route("/register").post(asyncHandler(register));
router.route("/login").post(asyncHandler(login));
router.route("/updatePassword").post(asyncHandler(updatePassword));

module.exports = router;