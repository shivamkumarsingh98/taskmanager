const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const todoSchema = new Schema({
    title: { 
        type: String,
         required: true 
        },
    description: String,
    completed: {
         type: Boolean, 
         default: false 
        },
    dueDate: Date,
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    updatedAt: { 
        type: Date, 
        default: Date.now
     },

     status:{
        type: String,
        enum:["inProcess","toDo","backLocks","doNe" ],
        index:true
     },
     user: {
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
    }
});


const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo