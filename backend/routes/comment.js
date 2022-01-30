const express = require("express");
const Comment = require("../models/schemas/comment");
const { isLoggedIn } = require("./middlewares");

const router = express.Router();

router.post("/", isLoggedIn, async (req, res, next) => {
  const { postId, responseTo, comment } = req.body;
  const { id: userId } =  req.user;
  try {
    await Comment.create({
      postId,
      userId,
      responseTo,
      comment,
    });

    return res.status(201).json({ message: "댓글 등록이 완료되었습니다." });
  } catch (err) {
    console.error(err);
    return next(err);
  }
});

module.exports = router