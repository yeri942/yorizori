import { atom } from "recoil";

export const stepUrlAtom = atom({
  key: "stepUrl",
  default: null,
});

export const IngredientsListAtom = atom({
  key: "IngredientListState",
  default: ["waqeqcasdcq"],
});

export const SourceListAtom = atom({
  key: "SourceListState",
  default: ["dqwcdqwcdzx"],
});

export const OrderListAtom = atom({
  key: "OrderListState",
  default: ["cdsacqwecasd"],
});

export const MainImageStateAtom = atom({
  key: "MainImageState",
  default: {
    file: [],
    state: false,
    preview: "",
  },
});

export const SubImageStateAtom = atom({
  key: "SubImageState",
  default: {
    file: Array.from({ length: 50 }, () => null),
    state: false,
    preview: Array.from({ length: 50 }, () => null),
  },
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
