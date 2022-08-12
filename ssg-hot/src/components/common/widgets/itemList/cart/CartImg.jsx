import React from "react";

export default function CartImg({ imgUrl }) {
  return (
    <div className="cartImg">
      <span className="cartCheck">
        <input type="checkbox" />
      </span>
      <span className="cartItemImg">
        <img src={imgUrl} alt="장바구니 이미지" />
      </span>
    </div>
  );
}
