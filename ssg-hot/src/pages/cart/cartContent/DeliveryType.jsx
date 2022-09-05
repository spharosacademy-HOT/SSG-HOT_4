import React from "react";
import { useRecoilValue } from "recoil";
import { cartState } from "../../../store/atom/cartState";

export default function DeliveryType() {
  const cartData = useRecoilValue(cartState);

  const deliveryType = [cartData.length, 0, 0];
  return (
    <ul className="deliveryTab">
      <li className="on">
        <a>
          <span className="d_txt">일반배송({deliveryType[0]})</span>
        </a>
      </li>
      <li>
        <a>
          <span className="d_txt">정기배송({deliveryType[1]})</span>
        </a>
      </li>
      <li className="new">
        <a>
          <span className="d_txt">함께장보기({deliveryType[2]})</span>
        </a>
      </li>
    </ul>
  );
}
