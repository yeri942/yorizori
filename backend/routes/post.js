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

//전체 레시피 조회
router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//개별 레시피 조회
router.get("/:postId", async (req, res, next) => {
  const { postId } = req.params;
  try {
    const posts = await Post.findById(postId);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
