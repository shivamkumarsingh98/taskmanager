const ApiError = require('../utils/apiError.utils');
const TodoServices = require('../services/todo.services')
const { UserDbFunction } = require("../database/db.function")

const Todo = new TodoServices();
const UserDb = new UserDbFunction();

const getData = async (req, res) => {
    const { id } = req.body;
    const todo = await Todo.getTodoData(id);
    if (!todo) throw new ApiError(401, "Unauthorized", "You are not authorized!");
    res.send(todo);
}

const addTodo = async (req, res) => {
    const { id, title, checkList, dueDate, priority } = req.body;
    console.log(req.body);
    const user = await UserDb.findOne({ id });
    if (!user) throw new ApiError(401, "Unauthorized", "You are not authorized!");
    req.body.owner = user.id;
    const todoData = { title: title, checkList: checkList, dueDate: dueDate, owner: id, priority: priority }
    const todoId = await Todo.addTodo(todoData);
    await user.todo.push(todoId);
    user.save();
    res.send("Hello");
}

module.exports = { getData, addTodo }