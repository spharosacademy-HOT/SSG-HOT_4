import { selector } from "recoil";
import { cartState } from "../atom/cartState";
// import axios from "axios";
const selCartState = selector({
  key: "selCartState",
  get: ({ get }) => {
    const cartData = get(cartState);
    return cartData;
  },
  set: ({ set }, newValue) => {
    console.log(newValue);
    set(cartState, newValue);
  },
});
export { selCartState };
