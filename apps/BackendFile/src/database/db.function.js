const User = require("../model/user.model");
const Todo = require("../model/todo.model");
const mongoose = require("mongoose")

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
    async getTodos({ idArray, startDate }) {
        const query = {
            createdAt: {
                $gte: startDate,
            },
            _id: { $in: idArray }
        }
        const todoData = await Todo.find(query);
        return todoData;
    }

    async addTodo(todoData) {
        const { id, ...data } = todoData;
        const todo = await Todo.create(data);
        return todo;
    }

    async updateTodo(todoData) {
        const { id, ...data } = todoData;
        const updatedTodo = await Todo.findByIdAndUpdate(id, data, { new: true });
        return updatedTodo;
    }

    async deleteTodo({ ownerId, id }) {
        const deletedTodo = await Todo.findOneAndDelete({ _id: id, owner: ownerId })
        return deletedTodo;
    }

    async getAnalytics({ ownerId, todoId }) {
        const ObjectId = mongoose.Types.ObjectId;
        const statusBased = [
            { $match: { owner: new ObjectId(ownerId), _id: { $in: todoId.map(id => new ObjectId(id)) } } },
            {
                $group: {
                    _id: { status: "$status" },
                    count: { $sum: 1 }
                }
            }
        ];
        const priorityBased = [
            { $match: { owner: new ObjectId(ownerId), _id: { $in: todoId.map(id => new ObjectId(id)) } } },
            {
                $group: {
                    _id: { priority: "$priority" },
                    count: { $sum: 1 }
                }
            }
        ];
        try {
            const statusData = await Todo.aggregate(statusBased);
            const priorityData = await Todo.aggregate(priorityBased);
            return { statusData, priorityData };
        } catch (error) {
            console.error("Error in getAnalytics:", error);
            throw error;
        }
    }




}

module.exports = { UserDbFunction, TodoDbFunction };