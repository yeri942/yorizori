const express = require("express");
const Post = require("../models/schemas/post");
const { isLoggedIn } = require("./middlewares");

const router = express.Router();

//레시피 작성
router.post("/", isLoggedIn, async (req, res, next) => {
  const newPost = new Post(req.body);
  try {
    await newPost.save();
    res.status(201).json({ message: "레시피등록이 완료되었습니다." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
