const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const todos = require("./Routes/todoRouters");
const users = require("./Routes/userRoutes");
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/todo", todos);
app.use("/api/user", users);

mongoose.connect(process.env.MONGO).then(() => {
    app.listen(process.env.PORT, () => {
        console.log("listening at port ", process.env.PORT);
    })
})