import React from "react";
import { useRecoilValue } from "recoil";
import { cartOrderPriceState } from "../../../store/atom/cartState";

export default function CartProductAmountPaid() {
  const priceData = useRecoilValue(cartOrderPriceState);
  console.log(priceData);
  return (
    <>
      <div className="purchase-card-box product-amount-paid">
        <div className="purchase-title-style">결제 예정금액</div>
        <div>
          <ul>
            <li>
              <div>주문금액</div>
              <div>+ {priceData.originPrice}</div>
            </li>
            <li>
              <div>할인금액</div>
              <div>- {priceData.discountPice}</div>
            </li>
          </ul>
        </div>
        <div>
          <div>총 결제예정금액</div>
          <div>+ {priceData.amountPaid}원</div>
        </div>
      </div>
    </>
  );
}
