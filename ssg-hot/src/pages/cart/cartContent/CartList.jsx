import React from "react";
import { useState } from "react";
import CartItem from "../../../components/common/widgets/itemList/cart/CartItem";
import CartListHeader from "./CartListHeader";

export default function CartList() {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="cartList">
      <CartListHeader showAll={showAll} setShowAll={setShowAll} />
      <CartItem showAll={showAll} setShowAll={setShowAll} />
    </div>
  );
}
