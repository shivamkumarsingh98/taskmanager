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
    const todoId = await Todo.addOrUpdate(todoData);
    await user.todo.push(todoId);
    user.save();
    res.send("Hello");
}

const deleteTodo = async (req, res) => {
    const { ownerId, id } = req.body;
    console.log(ownerId, id)
    const deletedTodo = await Todo.deleteDoto({ ownerId, id });
    res.status(200).json({ deletedTodo });
}

module.exports = { getData, addTodo, deleteTodo }