const Todo = require("../model/todo.model");
const ApiError = require("../utils/apiError.utils")

const shareTodo = async (req, res) => {
    const todoId = req.params;
    if (!todoId) throw new ApiError(401, "Invalid URL", "Invalid Url");
    const todo = await Todo.findById(todoId.id);
    if (!todo) throw new ApiError(401, "Invalid URL", "Invalid Url");
    res.status(200).json({ todo });
}

module.exports = { shareTodo }