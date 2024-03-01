const ApiError = require('../utils/apiError.utils');
const TodoServices = require('../services/todo.services')
const { UserDbFunction } = require("../database/db.function")

const Todo = new TodoServices();
const UserDb = new UserDbFunction();

const getData = async (req, res) => {
    const { ownerId } = req.body;
    const todo = await Todo.getTodoData({ _id: ownerId });
    if (!todo) throw new ApiError(401, "Unauthorized", "You are not authorized!");

    const InProcess = todo.filter(todo => todo.status === "inProcess");
    const Todos = todo.filter(todo => todo.status === "todo");
    const Backlogs = todo.filter(todo => todo.status === "backLocks");
    const Done = todo.filter(todo => todo.status === "done");

    const High = todo.filter(todo => todo.priority === "High");
    const Low = todo.filter(todo => todo.priority === "Low");
    const Medium = todo.filter(todo => todo.priority === "Medium");
    res.status(200).json({ todos: { InProcess, Todos, Backlogs, Done }, data: { InProcess: InProcess.length, Todos: Todos.length, Backlogs: Backlogs.length, Done: Done.length }, priority: { High: High.length, Low: Low.length, Medium: Medium.length } });
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

module.exports = { getData, addTodo, deleteTodo, updateTodo };