const { Schema } = require("mongoose");

const PostSchema = new Schema(
  {
    //레시피명
    recipeName: {
      type: String,
      required: true,
    },
    //요리 소개
    desc: String,
    //종류별
    category: String,
    //상황별 :
    condition: String,
    //재료별
    material: String,
    //방법별
    cook: String,
    //인원수
    servings: String,
    //요리 시간
    time: Number,
    //난이도
    diffic: Number,
    //재료 [{재료1:'김치',양:'두주먹'}]
    ingredient: [{ name: String, amount: String }],
    //양념
    seasoning: [{ name: String, amount: String }],

    // 이부분 궁금합니다. 이렇게 posts 안에 이미지 정보들을 들고있는게 나은지 아니면 따로 컬렉션을 만들어서 사진을 관리해야 하는지..
    //조리과정
    process: [{ text: String, imageName: String, iamgeUrl: String }],

    // 썸네일
    thumbnail: {
      name: String,
      imageUrl: { type: String, required: true, default: "" },
    },

    //완성 사진을 받는 부분입니다.
    photo: [{ imageName: String, imageUrl: String }],

    //작성글이 받은 좋아요 수를 따로 기록하는게 어떨까요
    countLike: {
      type: Number,
      default: 0,
    },

    //작성글을 유저와 연결합니다
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // 게시글에 달린 댓글 목록을 배열로 연결시킬지 아니면 노션의 구상대로 굳이 이 데이터를 만들지 않아도 될지 잘 모르겠습니다.
    // comments: [{ type: Schema.Types.ObjectId, ref: "Comment", default : null}],

    // 이 부분도 위와 마찬가지로 좋아요 누른 유저 목록을 따로 관리해야할지 , 아니면 Likes 컬렉션을 통해 likeCollection -> postId로 필터링 -> 그 후 유저정보 populate해서 받아오기 이렇게 할지 모르겠습니당
    // userLike : [{type : Schema.Types.ObjectId, ref : "Users", default: null}],
  },
  { timestamps: true }
);

module.exports = PostSchema;
