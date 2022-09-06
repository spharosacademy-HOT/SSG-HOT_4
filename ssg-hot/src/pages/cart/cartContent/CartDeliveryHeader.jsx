import React from "react";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { cartShowAllState } from "../../../store/atom/cartState";

export default function CartDeliveryHeader() {
  const showAll = useRecoilValue(cartShowAllState);
  const [isShow, setIsShow] = useState(showAll);
  return (
    <div className="cartDeliveryHeader">
      <label htmlFor=""></label>
      <span>
        <input
          type="checkbox"
          checked={isShow}
          onChange={() => setIsShow(!isShow)}
        />
      </span>
      <div className="titleWrap">
        <div className="titleArea">
          <label htmlFor="">
            <h3
              style={{
                fontSize: "15px",
                color: "#222",
                fontWeight: "bold",
                margin: 0,
              }}
            >
              택배배송
            </h3>
          </label>
          <p></p>
        </div>
      </div>
    </div>
  );
}
