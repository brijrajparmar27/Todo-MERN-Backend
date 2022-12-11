const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.login = async function () {

}
userSchema.statics.signup = async function (email, password) {
    if (!email || !password) {
        throw Error("cannot be empty");
    }
    const exists = await this.findOne({ email })
    console.log(exists);
    if (exists) {
        throw Error("Email Taken");
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ email, password: hash });

    return user;
}
module.exports = mongoose.model("userModel", userSchema, "user");