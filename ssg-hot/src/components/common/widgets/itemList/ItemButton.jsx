import React from "react";
import CartButton from "../button/CartButton";
import LikeButton from "../button/LikeButton";

export default function ItemButton() {
  return (
    <div className="recentBtn">
      <CartButton />
      <LikeButton />
    </div>
  );
}
