const { Router } = require("express");
const { asyncHandler } = require('../utils/asyncHandler');
const { getData, addTodo, deleteTodo } = require("../controller/todo.controller");

const router = Router();

router.route('/getData').get(asyncHandler(getData));
router.route('/addTodo').post(asyncHandler(addTodo));
router.route('/delete').delete(asyncHandler(deleteTodo));

module.exports = router;