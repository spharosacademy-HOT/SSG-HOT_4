import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  cartOrderPriceState,
  cartPurchaseState,
  cartState,
} from "../../../store/atom/cartState";

export default function CartPriceContent() {
  // const cartData = useRecoilValue(cartState);
  const [cartPriceData, setCartPriceData] = useRecoilState(cartOrderPriceState);
  const cartProductData = useRecoilValue(cartPurchaseState);
  const [priceData, setPriceData] = useState({});
  const cartCnt = cartProductData.length;

  let originPrice = 0;
  let discountPrice = 0;
  let deliveryPrice = 0;

  const sumPrice = () => {
    cartProductData.map((item) => {
      originPrice += item.stock.product.regularPrice * item.count;
      discountPrice +=
        item.stock.product.regularPrice *
        (item.stock.product.discountRate / 100) *
        item.count;
      deliveryPrice += item.stock.product.shippingFee;
    });
    //console.log(originPrice, discountPrice, deliveryPrice);/
  };
  useEffect(() => {
    sumPrice();
    setCartPriceData({
      originPrice: originPrice,
      discountPice: discountPrice,
      amountPaid: originPrice - discountPrice + deliveryPrice,
      orderTotal: originPrice - discountPrice,
      deliveryPay: deliveryPrice,
    });
  }, [cartProductData]);

  return (
    <div className="mnodr_toolbar_cont">
      <p className="mnodr_tx_desc" id="bar_price" style={{ marginTop: "1rem" }}>
        <span className="mnodr_cnt">전체상품 {cartCnt}개 </span>
        <span className="ssg_tx" id="toolbarCst">
          {cartPriceData.orderTotal}원 + 배송비 {cartPriceData.deliveryPay}원 =
        </span>
        <span className="mnodr_tx_total">
          <span className="ssg_tx" id="toolbarTotCst">
            {" "}
            {cartPriceData.amountPaid}원
          </span>
        </span>
      </p>
      <p
        id="dmndDisplay"
        className="mnodr_tx_desc mnodr_tx_point"
        style={{ display: "block" }}
      >
        <a
          href=""
          className="mnodr_tx_link2 layer_filter cartTracking"
          data-btn-target="#_layerDiscountCharge"
          data-type="cardDiscount"
          data-tracking-cd="00044_000000094_t00060"
          data-tracking-value="청구할인혜택보기"
        >
          청구할인 혜택보기
          <i className="icon ty_xs icon_chevron_right" aria-hidden="true"></i>
        </a>
      </p>
    </div>
  );
}
