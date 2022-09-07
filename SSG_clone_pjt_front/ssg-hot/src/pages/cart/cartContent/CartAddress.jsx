import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { addressState } from "../../../store/atom/addressState";

export default function CartAddress() {
  const navigate = useNavigate();
  const [addressData, setAddressData] = useRecoilState(addressState);

  const addressTitle = addressData[0].alias;
  const addressSub = "기본배송지";
  const addressInfo = `[${addressData[0].zipcode}] ${addressData[0].street}`;
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
          <button className="addressBtn" disabled>
            여러곳으로 한방에
          </button>
          <button
            className="addressBtn"
            onClick={() => navigate("/cartcontrol")}
          >
            배송지 변경
          </button>
        </div>
      </div>
    </div>
  );
}
