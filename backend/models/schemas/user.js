const { Schema } = require("mongoose");

const UserSchema = new Schema(
  {
    //유저아메일
    email: {
      type: String,
      required: true,
      default: null,
    },
    //유저닉네임
    nickname: {
      required: true,
      type: String,
    },
    //유저 비밀번호
    password: {
      type: String,
      required: true,
    },
    profile: [
      { image: { type: Buffer, required: true, default: false } },
      { name: { type: String, required: true, default: null } },
    ],

    //유저 작성한 post나 유저가 좋아요한 게시물들을 이렇게 따로 관리하는건 어떨지 생각해봤습니다.
    //이렇게 관리하면 나중에 프론트에서 요청이 하나 들어오면 너무 여러 데이터들을 업데이트 해야해서 별로일까요??
    // userPosts : [{
    //   type: Schema.Types.ObjectId,
    //   ref: "Post",
    //   default: [],
    // }]
  },
  { timestamps: true }
);

module.exports = UserSchema;
