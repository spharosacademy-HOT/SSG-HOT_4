import React from "react";
import { useRecoilValue } from "recoil";
import { cartOrderPriceState } from "../../../store/atom/cartState";

export default function CartTotalPrice() {
  const cartPrice = useRecoilValue(cartOrderPriceState);

  return (
    <div>
      <div className="cartTotal">
        <h3 className="cartTotalTit">
          <strong>결제 예정금액</strong>
        </h3>
        <dl className="cartPriceItem narrow">
          <dt>
            <span className="priceItemTit">주문금액</span>
          </dt>
          <dd>
            <span className="pricePrimary">
              +<em>{cartPrice.originPrice}</em>
              <span>원</span>
            </span>
          </dd>
        </dl>
        <dl className="cartPriceItem narrow">
          <dt>
            <span className="priceItemTit">상품할인</span>
          </dt>
          <dd>
            <span className="pricePrimary">
              -<em>{cartPrice.discountPrice}</em>
              <span>원</span>
            </span>
          </dd>
        </dl>
        <dl className="cartPriceItem narrow">
          <dt>
            <span className="priceItemTit">배송비</span>
          </dt>
          <dd>
            <span className="pricePrimary">
              +<em>{cartPrice.deliveryPay}</em>
              <span>원</span>
            </span>
          </dd>
        </dl>
        <dl className="cartPriceItem total">
          <dt>
            <span className="priceItemTit pointTxt">총 결제예정금액</span>
          </dt>
          <dd>
            <span className="priceTotal">
              <em>{cartPrice.amountPaid}</em>
              <span>원</span>
            </span>
          </dd>
        </dl>
      </div>
    </div>
  );
}
