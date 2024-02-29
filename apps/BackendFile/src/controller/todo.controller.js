const ApiError = require('../utils/apiError.utils');
const TodoServices = require('../services/todo.services')
const { UserDbFunction } = require("../database/db.function")

const Todo = new TodoServices();
const UserDb = new UserDbFunction();

const getData = async (req, res) => {
    const { ownerId } = req.body;
    const todo = await Todo.getTodoData({ _id: ownerId });
    if (!todo) throw new ApiError(401, "Unauthorized", "You are not authorized!");
    res.send(todo);
}

const addTodo = async (req, res) => {
    const { ownerId, title, checkList, dueDate, priority, id } = req.body;
    const user = await UserDb.findOne({ id: ownerId });
    if (!user) throw new ApiError(401, "Unauthorized", "You are not authorized!");
    req.body.owner = user.id;
    const todoData = { title: title, checkList: checkList, dueDate: dueDate, owner: ownerId, priority: priority, id: id }
    const todoId = await Todo.addTodo(todoData);
    await user.todo.push(todoId);
    user.save();
    res.send("Hello");
}

const updateTodo = async (req, res) => {

}

module.exports = { getData, addTodo }