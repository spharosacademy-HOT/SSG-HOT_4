import React from "react";
import { useRecoilValue } from "recoil";
import { cartOrderPriceState } from "../../../store/atom/cartState";

export default function CartProductDiscountOffer() {
  const priceData = useRecoilValue(cartOrderPriceState);
  return (
    <>
      <div className="purchase-card-box product-discount-offer">
        <div className="purchase-title-style">할인혜택</div>
        <div>
          <div>
            <p>상품할인</p>
            <p>-{priceData.discountPice}원</p>
          </div>
          <div>
            <p>결제할인(쿠폰 0장 보유)</p>
            <p>- 0원</p>
          </div>
          <div>
            <p>카드 첫결제 혜택</p>
            <p>- 0원</p>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
