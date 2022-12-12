const todoModel = require("../Models/todoModel");

const getAllTodo = (req, res) => {
    todoModel.find({}).then(data => {
        res.json(data).status(200)
    })
}
const postTodo = (req, res) => {
    const { todo, isPending } = req.body;
    todoModel.create({ todo, isPending }).then((data) => {
        res.json(data).status(200)
    })
}
const deleteTodo = (req, res) => {
    const { id } = req.params;
    todoModel.findByIdAndDelete(id).then(data => {
        res.json({ message: "delete a todo" }).status(200)
    })
}
const updateTodo = (req, res) => {
    const { id } = req.params;
    const { isPending } = req.body;
    todoModel.findByIdAndUpdate(id, { isPending }).then(data => {
        res.json(data).status(200)
    })
}

module.exports = {
    getAllTodo,
    postTodo,
    deleteTodo,
    updateTodo
}