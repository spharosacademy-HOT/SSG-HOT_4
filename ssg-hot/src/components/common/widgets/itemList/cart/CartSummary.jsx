import React from "react";

export default function CartSummary({ newPrice, deliveryCost }) {
  return (
    <div className="cartSummary">
      <strong style={{ color: "#6c7080" }}>
        <span>
          {newPrice}원 + 배송비 {deliveryCost}원 = {newPrice + deliveryCost}원
        </span>
        <span>&nbsp;(무료배송)</span>
      </strong>
      <button className="summaryBtn">
        <p style={{ margin: 0 }}>배송비SAVE 상품보기</p>
        <i className="rightArrowIcon"></i>
      </button>
    </div>
  );
}
