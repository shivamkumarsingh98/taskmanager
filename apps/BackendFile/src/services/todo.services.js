const { UserDbFunction, TodoDbFunction } = require("../database/db.function");
const ApiError = require("../utils/apiError.utils");

const UserDb = new UserDbFunction();
const TodoDb = new TodoDbFunction();

class TodoServices {
    getTodoData = async (id) => {
        const user = await UserDb.findOne({ id });
        if (!user) throw new ApiError(404, 'Unathorized!', 'token is not valid');
        const todo = user.todo;
        const todoData = await TodoDb.getTodos(todo);
        return todoData;
    }

    addOrUpdate = async (todoData) => {
        const todoId = await TodoDb.addOrUpdate(todoData);
        return todoId;
    }

    deleteDoto = async ({ ownerId, id }) => {
        const deletedTodo = await TodoDb.deleteTodo({ ownerId, id });
        return deletedTodo;
    }
}

module.exports = TodoServices;