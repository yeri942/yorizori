import { atom } from "recoil";

export const stepUrlAtom = atom({
  key: "stepUrl",
  default: null,
});

export const IngredientsListAtom = atom({
  key: "IngredientListState",
  default: [1],
});

export const SourceListAtom = atom({
  key: "SourceListState",
  default: [1],
});

// //요리제목
// export const recipeNameAtom = atom({
//   key: "recipeName",
//   default: null,
// });
// //요리소개
// export const descAtom = atom({
//   key: "desc",
//   default: null,
// });

// export const stepOneAtom = atom({
//   key: "stepOne",
//   default: {
//     recipeName: '',
//     desc: '',
//   },
// });
