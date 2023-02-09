const user = require("../Models/userModel");
const jwt = require("jsonwebtoken");

const createToken = ({ _id }) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

const login = (req, res) => {
  const { email, password } = req.body;

  user
    .login(email, password)
    .then((data) => {
      let token = createToken(data);
      res
        .json({
          _id: data._id,
          jwt: token,
          email: data.email,
          projects: data.projects,
        })
        .status(200);
    })
    .catch((err) => {
      res.json({ message: err.message }).status(400);
    });
};

const signup = (req, res) => {
  const { email, password } = req.body;
  user
    .signup(email, password)
    .then((data) => {
      let token = createToken(data);
      res
        .json({
          _id: data._id,
          jwt: token,
          email: data.email,
          projects: data.projects,
        })
        .status(200);
    })
    .catch((err) => {
      res.json({ message: err.message }).status(400);
    });
};

const AddProject = (req, res) => {
  const { projects, _id } = req.body;
  console.log(projects, _id);
  user
    .findOneAndUpdate(
      { _id },
      { projects },
      {
        new: true,
      }
    )
    .then((data) => {
      console.log(data, " updated projects");
      res.json(data).status(200);
    });
};

module.exports = {
  login,
  signup,
  AddProject,
};
