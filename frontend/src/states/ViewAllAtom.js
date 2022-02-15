import { atom, selector } from "recoil";
import { getFamousPosts } from "../actions/homeAction";

export const randomButtonState = atom({
  key: "randomButtonState",
  default: false,
});

export const randomPostState = atom({
  key: "randomPostState",
  default: {},
});

export const dropDownOptionsState = atom({
  key: "dropDownOptionsState",
  default: { category: "", material: "", condition: "", cook: "" },
});

export const famousPostsSelector2 = selector({
  key: "getFamousListSelector2",
  get: async ({ get }) => {
    try {
      const famousList = await getFamousPosts(0, 10);
      return famousList;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
});
