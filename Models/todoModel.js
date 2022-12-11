const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    todo: {
        type: String,
        required: true,
    },
    isPending: {
        type: Boolean,
        default: true
    }
},{createdAt:true})

module.exports = mongoose.model("todo", todoSchema, "todos")