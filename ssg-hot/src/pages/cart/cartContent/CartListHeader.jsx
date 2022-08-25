import React from "react";

export default function CartListHeader() {
  return (
    <div className="cartListHeader cartControl">
      <div className="cartControlGroup">
        <span className="cartControlCheck">
          <input type="checkbox" />
        </span>
        <label htmlFor="">
          <span>전체</span>
        </label>
        <span className="controlTxt">
          <a href="">
            <span>배송방법바꾸기</span>
          </a>
        </span>
      </div>
      <span className="cartControlDelete">
        <a href="">품절상품삭제</a>
      </span>
    </div>
  );
}
