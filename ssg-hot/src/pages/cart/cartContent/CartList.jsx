import React from "react";
import { useState } from "react";
import CartItem from "../../../components/common/widgets/itemList/cart/CartItem";
import CartListHeader from "./CartListHeader";

export default function CartList() {
  return (
    <div className="cartList">
      <CartListHeader />
      <CartItem />
    </div>
  );
}
