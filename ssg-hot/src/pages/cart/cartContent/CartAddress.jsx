import React from "react";

export default function CartAddress() {
  const addressTitle = "자택";
  const addressSub = "기본배송지";
  const addressInfo = "[11111] 부산 남구  (문현동)";
  return (
    <div className="cartAddress">
      <div className="addressHeader">
        <div className="addressRow">
          <i className="icon addressSm locationIcon"></i>
          <h3 className="addressTit">{addressTitle}</h3>
          <span className="addressSubTit">{addressSub}</span>
        </div>
        <p className="addressInfo">{addressInfo}</p>
        <p></p>
      </div>
      <div className="addressContents">
        <div className="addressBtnArea">
          <button className="addressBtn">여러곳으로 한방에</button>
          <button className="addressBtn">배송지 변경</button>
        </div>
      </div>
    </div>
  );
}
