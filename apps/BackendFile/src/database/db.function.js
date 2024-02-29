const User = require("../model/user.model");
const Todo = require("../model/todo.model");

class UserDbFunction {
    async findOne({ email, id }) {
        const user = await User.findOne({ $or: [{ email }, { _id: id }], });
        return user;
    }

    async createUser(name, email, password) {
        const user = await User.create({ name, email, password });
        return user;
    }
}

class TodoDbFunction {
    async getTodos(idArray) {
        const todoData = await Todo.find({ _id: { $in: idArray } });
        return todoData;
    }

    async addTodo(todoData) {
        const todo = await Todo.create(todoData);
        return todo.id;
    }
}

module.exports = { UserDbFunction, TodoDbFunction };