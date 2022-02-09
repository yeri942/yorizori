const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("./middlewares");
const { Like, User } = require("../models/");
const asyncHandler = require("../utils/asyncHandler");

//좋아요 눌렀을 때 post
router.post(
  "/",
  isLoggedIn,
  asyncHandler(async (req, res, next) => {
    const { postId } = req.body; // body에서 postId 받고 ,
    const { id: userId } = req.user; //req.user 에서 userId 꺼내고

    //만약 이미 좋아요를 누른 게시물이라면 에러를 던짐
    const currentLike = await Like.findOne({ postId, userId, isUnliked: false });
    if (currentLike) {
      throw new Error("이미 좋아요 한 게시글입니다.");
      return;
    }
    await Like.create({ userId, postId }); //새로운 좋아요 데이터 생성
    res.status(200).json({ message: "좋아요 한 목록에 추가되었습니다." });
  })
);

//게시글에 눌린 좋아요를 조회하는 경우 좋아요를 누른 유저들을 배열로 보내줍니다.
router.get(
  "/:postId",
  isLoggedIn,
  asyncHandler(async (req, res, next) => {
    const { postId } = req.params;
    //해당 게시글의 좋아요만 필터링하고 , 유저의 password만 제외한 정보들을 userId에 담음
    const likeUserList = await Like.find({ postId, isUnliked: false }).populate({
      path: "userId",
      select: "-password",
    });
    res.status(200).json({ likeUserList }); //좋아요를 누른 유저 정보가 담긴 배열을 응답
  })
);

//좋아요 삭제 delete isUnliked = true 로 바꿔서 관리
router.delete(
  "/",
  isLoggedIn,
  asyncHandler(async (req, res, next) => {
    const { postId } = req.body;
    const { id: userId } = req.user;
    const currentLike = await Like.findOne({ postId, userId, isUnliked: false }); //
    if (!currentLike) {
      throw new Error("좋아요 한 게시글이 아닙니다."); // 종아요한 게시글이 아니면 에러 던짐
      return;
    }
    currentLike.isUnliked = true;
    await currentLike.save();
    res.status(200).json({ message: "좋아요 한 목록에서 삭제되었습니다." });
  })
);

module.exports = router;
