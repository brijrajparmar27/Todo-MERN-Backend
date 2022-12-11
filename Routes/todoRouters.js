const express = require("express");
const {
    getAllTodo,
    postTodo,
    deleteTodo,
    updateTodo
} = require("../Controllers/todoController")

const todos = express.Router();

todos.get("/", getAllTodo)
todos.post("/", postTodo)
todos.delete("/:id", deleteTodo)
todos.patch("/:id", updateTodo)

module.exports = todos