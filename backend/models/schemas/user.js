const { Schema } = require("mongoose");
const shortId = require("../types/short-id");

const UserSchema = new Schema(
  {
    //유저아메일
    email: {
      type: String,
      required: true,
      unique: true,
    },
    //유저닉네임
    nickName: {
      required: true,
      type: String,
      unique: true,
    },
    //유저 비밀번호
    password: {
      type: String,
      default: null,
    },
    //유저 프로필 사진이 저장된 파일 경로
    profileImage: {
      type: String,
      default: null,
    },
    profileName: {
      type: String,
      default: null,
    },
    kakaoId: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

UserSchema.virtual("numFollowees", {
  ref: "Follow",
  localField: "_id",
  foreignField: "followerId",
  count: true,
  options: {},
});

module.exports = UserSchema;
