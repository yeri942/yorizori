import { atom } from "recoil";

export const FamousPostsAtom = atom({
  key: "FamousPostsAtom",
  default: [],
});

export const FamousPostsHeartAtom = atom({
  key: "FamousPostsHeartAtom",
  default: {},
});

export const FamousPostsCommentAtom = atom({
  key: "FamousPostsHeartAtom",
  default: {},
});
