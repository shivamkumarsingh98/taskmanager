const { Router } = require("express");
const { asyncHandler } = require('../utils/asyncHandler');
const { shareTodo } = require("../controller/share.controller")

const router = Router();

router.route('/:id').get(asyncHandler(shareTodo));

module.exports = router;