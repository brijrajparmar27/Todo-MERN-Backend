const user = require("../Models/userModel");
const jwt = require("jsonwebtoken");

const createToken = ({ _id }) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: '3d' })
}

const login = (req, res) => {
    const { email, password } = req.body;

    user.login(email, password).then(data => {
        let token = createToken(data);
        res.json({ _id: data._id, jwt: token, email: data.email }).status(200);
    }).catch(err => {
        res.json({ message: err.message }).status(400);
    })
}

const signup = (req, res) => {
    const { email, password } = req.body;
    user.signup(email, password).then((data) => {
        let token = createToken(data);
        res.json({ _id: data._id, jwt: token, email: data.email }).status(200);
    }).catch(err => {
        res.json({ message: err.message }).status(400);
    })
}

module.exports = {
    login,
    signup
}