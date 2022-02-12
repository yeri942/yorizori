const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("./middlewares");
const { History, User } = require("../models/");
const asyncHandler = require("../utils/asyncHandler");

//게시글 상세페이지 들어갔을 때 history post
router.post(
  "/",
  isLoggedIn,
  asyncHandler(async (req, res, next) => {
    const { id: userId } = req.user;
    const { postId } = req.body;
    //기존에 봤던 게시물이라면 islastviewed를 false로 바꿔줌
    const preLastView = await History.findOne({ userId, postId, isLastViewed: true });
    if (preLastView) {
      preLastView.isLastViewed = false;
      await preLastView.save();
    }
    //그 후 최근에 본 게시물을 새로 만듦
    await History.create({ userId, postId });
    res.status(200).json({ message: "마지막으로 본 게시글에 추가되었습니다" });
  })
);

//코치님 이 라우터를 포함한 get 요청 처리 미들웨어에서 아래 코드와 비슷한 로직으로 startindex 와 limit 을 처리하는데 , 35번줄 코드와 47번줄 코드가 중복됩니다.. exec()이나 callback함수로 처리해보려고 헀으나 잘 안되어서 일단 이렇게 풀어서 작성했습니다. 코드를 더 깔끔하게 바꿀 수 있는 방법이 있을까요?
//특정 게시물을 본 유저 목록 get
router.get(
  "/:postId",
  // isLoggedIn,
  asyncHandler(async (req, res, next) => {
    const { postId } = req.params;
    let { startIndex, limit } = req.query;
    if (!startIndex) startIndex = 1;
    if (!limit) limit = 0;

    //startIndex와 limit 데이터를 다 받으면 startindex부터 limit 개수의 데이터를 보내줌
    startIndex = parseInt(startIndex);
    limit = parseInt(limit);
    const viewUserList = await History.find({ postId, isLastViewed: true })
      .sort({ createdAt: -1 })
      .populate({ path: "userId", select: "-password" })
      .skip(startIndex - 1)
      .limit(limit);
    res.status(200).json({ viewUserList });
  })
);

module.exports = router;
