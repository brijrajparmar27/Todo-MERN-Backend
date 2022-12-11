const user = require("../Models/userModel");

const login = (req, res) => {

    res.json({ message: "login user" }).status(200);
}

const signup = (req, res) => {
    const {email,password} = req.body;
    user.signup(email,password).then((data)=>{
        res.json(data).status(200);
    })
}

module.exports = {
    login,
    signup
}