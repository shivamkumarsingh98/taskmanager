const { Router } = require("express");
const { asyncHandler } = require('../utils/asyncHandler');
const { getData, addTodo, deleteTodo, updateTodo, todoShareLink } = require("../controller/todo.controller");

const router = Router();

router.route('/getData').get(asyncHandler(getData));
router.route('/addTodo').post(asyncHandler(addTodo));
router.route('/updateTodo').post(asyncHandler(updateTodo));
router.route('/deleteTodo').delete(asyncHandler(deleteTodo));
router.route('/shareLink').get(asyncHandler(todoShareLink));

module.exports = router;