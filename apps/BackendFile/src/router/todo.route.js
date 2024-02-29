const { Router } = require("express");
const { asyncHandler } = require('../utils/asyncHandler');
const { getData, addTodo } = require("../controller/todo.controller");

const router = Router();

router.route('/getData').get(asyncHandler(getData));
router.route('/addTodo').post(asyncHandler(addTodo));

module.exports = router;