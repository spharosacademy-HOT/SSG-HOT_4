import React, { useState } from "react";
import CartButton from "../../button/CartButton";
import LikeButton from "../../button/LikeButton";

export default function ItemButton() {
  const [isLike, setIsLike] = useState(false);
  return (
    <div className="recentBtn">
      <CartButton />
      <LikeButton isLike={isLike} setIsLike={setIsLike} />
    </div>
  );
}
