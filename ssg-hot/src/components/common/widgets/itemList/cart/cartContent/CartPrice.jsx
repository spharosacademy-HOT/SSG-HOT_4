import React from "react";

export default function CartPrice({ oldPrice, newPrice, qty }) {
  return (
    <div className="cartItemPrice">
      <div>
        <div className="oldPrice">
          <del>
            <em style={{ fontSize: "14px" }}>{oldPrice}</em>
            <span className="won">원</span>
          </del>
          <button type="button" className="cartBtnDetail">
            <i className="iconBtn detailBtn"></i>
          </button>
        </div>
        <div className="newPrice">
          <em>{newPrice}</em>
          <span className="won">원</span>
        </div>
      </div>
      <div className="cartItemQty">
        <div className="cartAmount">
          <div className="qtyValue">
            <span className="qtyText">{qty}</span>
          </div>
          <button type="button" className="minusBtn">
            <i className="iconBtn minusBtnIcon"></i>
          </button>
          <button type="button" className="plusBtn">
            <i className="iconBtn plusBtnIcon"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
