import React from "react";
import { useRecoilState } from "recoil";
import { cartShowAllState } from "../../../store/atom/cartState";

export default function CartListHeader() {
  const [showAll, setShowAll] = useRecoilState(cartShowAllState);
  return (
    <div className="cartListHeader cartControl">
      <div className="cartControlGroup">
        <span className="cartControlCheck">
          <input
            type="checkbox"
            checked={showAll}
            onChange={() => setShowAll(!showAll)}
          />
        </span>
        <label htmlFor="">
          <span>전체</span>
        </label>
        <span className="controlTxt">
          <a>
            <span>배송방법바꾸기</span>
          </a>
        </span>
      </div>
      <span className="cartControlDelete">
        <a>품절상품삭제</a>
      </span>
    </div>
  );
}
