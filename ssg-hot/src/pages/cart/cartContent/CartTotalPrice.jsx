import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { cartState } from "../../../store/atom/cartState";

export default function CartTotalPrice() {
  const cartData = useRecoilValue(cartState);
  let originPrice = 0;
  let discountPrice = 0;
  let deliveryPrice = 0;

  const sumPrice = () => {
    cartData.map((item) => {
      originPrice += item.stock.product.regularPrice * item.count;
      discountPrice +=
        item.stock.product.regularPrice *
        (item.stock.product.discountRate / 100) *
        item.count;
      deliveryPrice += item.stock.product.shippingFee;
    });
  };

  sumPrice();

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
