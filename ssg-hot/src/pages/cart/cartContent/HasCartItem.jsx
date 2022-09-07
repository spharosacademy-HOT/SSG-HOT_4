import React from "react";
import CartCardInfo from "../CartCardInfo";
import CartBlank from "./CartBlank";
import CartList from "./CartList";
import CartTotalPrice from "./CartTotalPrice";

export default function HasCartItem() {
  return (
    <>
      {" "}
      <CartList />
      <CartTotalPrice />
      <CartBlank />
      <CartCardInfo />
    </>
  );
}
