import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { addressState } from "../../../store/atom/addressState";
import { cartOrderPriceState } from "../../../store/atom/cartState";
import { userState } from "../../../store/atom/user";

export default function CartOrderComplete() {
  const navigate = useNavigate();
  const deliveryData = useRecoilValue(addressState);
  const priceData = useRecoilValue(cartOrderPriceState);
  const userData = useRecoilValue(userState);

  return (
    <>
      <div className="order-complete">
        <div className="commonHeader bg-white">
          <div className="backBtn">
            <button type="button" onClick={() => navigate(-1)}></button>
          </div>
          <h2>주문 완료</h2>
        </div>
        <div className="older-complete-text">주문이 완료되었습니다</div>
        <div className="recipient-infomation">
          <div>받는분 정보</div>
          <div>
            {userData.name} / {userData.phone}
          </div>
          <div>{deliveryData.city}</div>
        </div>
        <div className="payment-amount">
          결제금액 : {priceData.amountPaid}원
        </div>
        <div className="shopping-button">
          <Link to="/">
            <div>계속 쇼핑하기</div>
          </Link>
          <Link to="/order">
            <div>주문상품 상세보기</div>
          </Link>
        </div>
      </div>
    </>
  );
}
