const express = require("express");

const {
  login,
  signup,
  AddProject,
  DelProject,
} = require("../Controllers/userController");

const userRoutes = express.Router();

userRoutes.post("/login/", login);
userRoutes.post("/signup/", signup);
userRoutes.patch("/newproject", AddProject);
userRoutes.patch("/delproject", DelProject);

module.exports = userRoutes;
