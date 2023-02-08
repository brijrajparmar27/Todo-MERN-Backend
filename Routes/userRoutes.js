const express = require("express");

const {
    login,
    signup,
    AddProject
} = require("../Controllers/userController");

const userRoutes = express.Router();

userRoutes.post("/login/", login)
userRoutes.post("/signup/", signup)
userRoutes.patch("/newproject", AddProject);

module.exports = userRoutes;