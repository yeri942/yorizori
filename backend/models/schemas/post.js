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
    thumbnail: {
      name: String,
      imageUrl: String,
    },
    photo: [{ name: String, iamgeUrl: String }],
  },
  { timestamps: true }
);

module.exports = UserSchema;
