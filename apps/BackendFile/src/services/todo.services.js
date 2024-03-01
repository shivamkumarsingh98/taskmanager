const { UserDbFunction, TodoDbFunction } = require("../database/db.function");
const ApiError = require("../utils/apiError.utils");

const UserDb = new UserDbFunction();
const TodoDb = new TodoDbFunction();

class TodoServices {
    getTodoData = async ({ id, startDate }) => {
        const user = await UserDb.findOne({ id });
        if (!user) throw new ApiError(404, 'Unathorized!', 'token is not valid');
        const todo = user.todo;
        const todoData = await TodoDb.getTodos({ idArray: todo, startDate });
        return todoData;
    }

    addTodo = async (todoData) => {
        const todoId = await TodoDb.addTodo(todoData);
        return todoId;
    }

    deleteDoto = async ({ ownerId, id }) => {
        const deletedTodo = await TodoDb.deleteTodo({ ownerId, id });
        return deletedTodo;
    }

    updateTodo = async (todoData) => {
        const updatedTodo = await TodoDb.updateTodo(todoData);
        return updatedTodo;
    }

    getAnalytics = async (id) => {
        const user = await UserDb.findOne({ id });
        if (!user) throw new ApiError(404, 'Unathorized!', 'token is not valid');
        const todo = user.todo;
        if (todo.length === 0) return todo;
        const result = await TodoDb.getAnalytics({ ownerId: id, todoId: todo })
        return result;
    }
}

module.exports = TodoServices;