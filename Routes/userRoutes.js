const express = require("express");

const {
    login,
    signup
} = require("../Controllers/userController");

const userRoutes = express.Router();

userRoutes.post("/login/", login)
userRoutes.post("/signup/", signup)

module.exports = userRoutes;