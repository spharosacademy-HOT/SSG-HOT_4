import React from "react";

export default function CartTotalPrice() {
  const originPrice = 230000;
  const discountPrice = 2000;
  const deliveryPrice = 0;
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
              +<em>{originPrice}</em>
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
              -<em>{discountPrice}</em>
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
              +<em>{deliveryPrice}</em>
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
              <em>{originPrice + deliveryPrice - discountPrice}</em>
              <span>원</span>
            </span>
          </dd>
        </dl>
      </div>
    </div>
  );
}
