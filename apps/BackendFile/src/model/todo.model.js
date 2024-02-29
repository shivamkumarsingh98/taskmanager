const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const checklistItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    state: {
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending'
    }
});

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    checkList: [checklistItemSchema],

    dueDate: Date,

    status: {
        type: String,
        enum: ["inProcess", "todo", "backLocks", "done"],
        default: "todo"
    },

    priority: {
        type: String,
        enum: ["High", "Low", "Medium"],
        default: "Low"
    },

    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        index: 1,
        required: true
    }
}, {
    timestamps: true
});


const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo