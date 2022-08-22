import React from "react";

export default function DeliveryType() {
  const deliveryType = [3, 0, 0];
  return (
    <ul className="deliveryTab">
      <li className="on">
        <a href="">
          <span className="d_txt">일반배송({deliveryType[0]})</span>
        </a>
      </li>
      <li>
        <a href="">
          <span className="d_txt">정기배송({deliveryType[1]})</span>
        </a>
      </li>
      <li className="new">
        <a href="">
          <span className="d_txt">함께장보기({deliveryType[2]})</span>
        </a>
      </li>
    </ul>
  );
}
