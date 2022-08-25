import { atom } from "recoil";

export const cartState = atom({
  key: "cartState",
  default: {},
});

// export const cartSizeState = atom({
//   key: "cartSize",
//   default: 0,
// });

export const cartCntState = atom({
  key: "cartCntState",
  default: 0,
});
