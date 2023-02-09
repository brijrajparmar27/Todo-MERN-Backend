const todoModel = require("../Models/todoModel");

const getAllTodo = (req, res) => {
  const { id, folderId } = req.params;
  todoModel.find({ createdBY: id, folderId }).then((data) => {
    res.json(data).status(200);
  });
};
const postTodo = (req, res) => {
  const { todo, isPending, createdBY, folderId } = req.body;
  todoModel.create({ todo, isPending, createdBY, folderId }).then((data) => {
    res.json(data).status(200);
  });
};
const deleteTodo = (req, res) => {
  const { id } = req.params;
  todoModel.findByIdAndDelete(id).then((data) => {
    res.json({ message: "delete a todo" }).status(200);
  });
};
const updateTodo = (req, res) => {
  const { id } = req.params;
  const { isPending } = req.body;
  todoModel.findByIdAndUpdate(id, { isPending }).then((data) => {
    res.json(data).status(200);
  });
};

module.exports = {
  getAllTodo,
  postTodo,
  deleteTodo,
  updateTodo,
};
