const ApiError = require('../utils/apiError.utils');
const TodoServices = require('../services/todo.services')
const { UserDbFunction } = require("../database/db.function")

const Todo = new TodoServices();
const UserDb = new UserDbFunction();

const getData = async (req, res) => {
    const { ownerId, startDate } = req.body;
    const todo = await Todo.getTodoData({ id: ownerId, startDate: startDate });
    if (!todo) throw new ApiError(401, "Unauthorized", "You are not authorized!");

    const InProcess = todo.filter(todo => todo.status === "inProcess");
    const Todos = todo.filter(todo => todo.status === "todo");
    const Backlogs = todo.filter(todo => todo.status === "backLocks");
    const Done = todo.filter(todo => todo.status === "done");

    res.status(200).json({ todos: { InProcess, Todos, Backlogs, Done } });
}

const addTodo = async (req, res) => {
    const { ownerId, title, checkList, dueDate, priority, status } = req.body;
    const user = await UserDb.findOne({ id: ownerId });
    if (!user) throw new ApiError(401, "Unauthorized", "You are not authorized!");
    const todoData = { title: title, checkList: checkList, dueDate: dueDate, owner: ownerId, priority: priority, status: status }
    const todoId = await Todo.addTodo(todoData);
    await user.todo.push(todoId);
    user.save();
    res.status(200).send("Success!");
}

const updateTodo = async (req, res) => {
    const { ownerId, title, checkList, dueDate, priority, id } = req.body;
    const user = await UserDb.findOne({ id: ownerId });
    if (!user) throw new ApiError(401, "Unauthorized", "You are not authorized!");
    const todoData = { title: title, checkList: checkList, dueDate: dueDate, owner: ownerId, priority: priority, id: id };
    const updatedTodo = await Todo.updateTodo(todoData);
    res.status(200).json({ updatedTodo: updatedTodo });
}

const deleteTodo = async (req, res) => {
    const { ownerId, id } = req.body;
    const deletedTodo = await Todo.deleteDoto({ ownerId, id });
    res.status(200).json({ deletedTodo });
}

const todoShareLink = async (req, res) => {
    const todoId = req.query.todoId;
    res.send(`${req.headers.host}/share/${todoId}`);
}

const getAnalytics = async (req, res) => {
    const id = req.body.ownerId;
    const result = await Todo.getAnalytics(id)
    res.send(result)
}

module.exports = { getData, addTodo, deleteTodo, updateTodo, todoShareLink, getAnalytics };