const { Router } = require("express");
const { asyncHandler } = require('../utils/asyncHandler');
const { getData, addTodo, deleteTodo, updateTodo, todoShareLink, getAnalytics } = require("../controller/todo.controller");

const router = Router();

router.route('/getData').get(asyncHandler(getData));
router.route('/addTodo').post(asyncHandler(addTodo));
router.route('/updateTodo').post(asyncHandler(updateTodo));
router.route('/deleteTodo').delete(asyncHandler(deleteTodo));
router.route('/shareLink').get(asyncHandler(todoShareLink));
router.route('/analytics').get(asyncHandler(getAnalytics))

module.exports = router;