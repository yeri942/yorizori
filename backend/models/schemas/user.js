const { Schema } = require("mongoose");

const UserSchema = new Schema(
  {
    //유저아메일
    userEmail: {
      type: String,
      required: true,
      default: null,
    },
    //유저닉네임
    userNickname: {
      required: true,
      type: String,
    },
    //유저 비밀번호
    userPw: {
      type: String,
      required: true,
    },
    //유저 프로필 이미지는 직접 db에 저장하는 방법 어떠신가요
    userProfile: [
      { image: { type: Buffer, required: true, default: false } },
      { name: { type: String, required: true, default: null } },
    ],
    //History 컬렉션과 연결
    historyId: [
      {
        type: Schema.Types.ObjectId,
        ref: "History",
        default: [],
      },
    ],
    //유저 작성한 post나 유저가 좋아요한 게시물들을
    // userPosts : [{
    //   type: Schema.Types.ObjectId,
    //   ref: "Post",
    //   default: [],
    // }]
  },
  { timestamps: true }
);

module.exports = UserSchema;
