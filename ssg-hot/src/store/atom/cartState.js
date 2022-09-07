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

export const cartShowAllState = atom({
  key: "cartShowAllState",
  default: false,
});

export const cartPurchaseState = atom({
  key: "cartPurchaseState",
  default: [],
});

export const cartOrderPriceState = atom({
  key: "cartOrderPriceState",
  default: {},
});
