const mongoose = require("mongoose");
const shortId = require("./types/short-id");

const userSchema = new mongoose.Schema({
  shortId,
  email: {
    type: String,
    required: true,
  },
  nickName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  kakaoId: {
    type: String,
  },
});

module.exports = mongoose.model("user", userSchema);
