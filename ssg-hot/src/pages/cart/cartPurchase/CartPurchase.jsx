import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { purchaseProduct } from "../../../store/apis/product";
import {
  cartOrderPriceState,
  cartPurchaseState,
} from "../../../store/atom/cartState";
import { addressState } from "../../../store/atom/addressState";
import { userState } from "../../../store/atom/user";
import { useNavigate } from "react-router-dom";
import CartProductAmountPaid from "./CartProductAmout";
import CartProductDiscountOffer from "./CartProcudtDiscoutOffer";
import ProductDeliveryAdress from "../../product/productPurchase/ProductDeliveryAdress";
import ProductPoint from "../../product/productPurchase/ProductPoint";
import ProductPaymentMethod from "../../product/productPurchase/ProductPaymentMethod";
import ProductPaying from "../../product/productPurchase/ProductPaying";
import ProductMyInfo from "../../product/productPurchase/ProductMyInfo";
import ProductShippingRequest from "../../product/productPurchase/ProductShippingRequest";
import CartProductDeliveryItems from "./CartProductDeliveryItems";
import { useState } from "react";

export default function CartPurchase() {
  const [cartPurchaseProductData, setCartPurchaseProductData] =
    useRecoilState(cartPurchaseState);

  const deliveryData = useRecoilValue(addressState);
  const priceData = useRecoilValue(cartOrderPriceState);
  const userData = useRecoilValue(userState);
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const purchaseData = {
    amountPaid: priceData.amountPaid,
    orderTotal: priceData.orderTotal,
    deliveryPay: priceData.deliveryPay,
    deliveryTaker: deliveryData[0].taker,
    deliveryName: deliveryData[0].alias,
    deliveryPhone: deliveryData[0].phone,
    deliveryAddress: deliveryData[0].city,
    deliveryAddress2: deliveryData[0].street,
    deliveryZipcode: deliveryData[0].zipcode,
    deliveryInfo: "택배함에 넣어주세요",
    envoice: "송장번호",
    paymentOption: "카드",
    couponId: 1,
    orderInfo: "주문 시 결제수단으로 환불받기",
    orderName: userData.name,
    orderPhone: userData.phone,
    orderEmail: userData.email,
  };

  const handlePurchase = () => {
    const result = cartPurchaseProductData.map((item) => {
      const product = {
        stockId: item.stock.id,
        stockCount: item.count,
        stockPrice: item.stock.product.discountPrice,
      };
      return product;
    });
    if (!isChecked) {
      alert("결제방법을 선택해주세요");
      return;
    }
    if (window.confirm("구매하시겠습니까?") === true) {
      purchaseData.orderItems = result;
      purchaseProduct(purchaseData)
        .then((res) => {
          navigate("/cart/order/completion");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="purchase-background">
        <ProductDeliveryAdress />
        <CartProductDiscountOffer />
        <ProductPoint />
        <ProductPaymentMethod setIsChecked={setIsChecked} />
        <CartProductAmountPaid />
        <ProductPaying handlePurchase={handlePurchase} />
        <ProductMyInfo />
        <ProductShippingRequest />
        <CartProductDeliveryItems />
        <div className="purchase-bar" onClick={handlePurchase}>
          결제하기
        </div>
      </div>
    </>
  );
}
