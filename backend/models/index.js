const mongoose = require("mongoose");
const UserSchema = require("./schemas/user");

const User = mongoose.model("User", UserSchema);

exports.User = User;
