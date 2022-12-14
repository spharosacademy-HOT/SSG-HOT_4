import React from "react";
import { useRecoilValue } from "recoil";
import ProductAmountPaid from "./ProductAmountPaid";
import ProductDeliveryAdress from "./ProductDeliveryAdress";
import ProductDeliveryItems from "./ProductDeliveryItems";
import ProductDiscountOffer from "./ProductDiscountOffer";
import ProductMyInfo from "./ProductMyInfo";
import ProductPaying from "./ProductPaying";
import ProductPaymentMethod from "./ProductPaymentMethod";
import ProductPoint from "./ProductPoint";
import ProductShippingRequest from "./ProductShippingRequest";
import {
  originPriceState,
  purchaseState,
  totalPriceState,
} from "../../../store/atom/purchaseState";
import { purchaseProduct } from "../../../store/apis/product";
import { useEffect } from "react";
import { getAddress } from "../../../store/apis/address";
import { getUserDetail } from "../../../store/apis/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Purchase() {
  const totalDiscountPrice = useRecoilValue(totalPriceState);
  const originPrice = useRecoilValue(originPriceState)
  const purchaseProductData = useRecoilValue(purchaseState);
  const [deliveryData, setDeliveryData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate()

  const purchaseData = {
    amountPaid: originPrice,
    orderTotal: totalDiscountPrice,
    deliveryPay: 3000,

    deliveryTaker: deliveryData.taker,
    deliveryName: deliveryData.alias,
    deliveryPhone: deliveryData.phone,
    deliveryAddress: deliveryData.city,
    deliveryAddress2: "지번",
    deliveryZipcode: deliveryData.zipcode,
    deliveryInfo: "택배함에 넣어주세요",
    envoice: "송장번호",
    paymentOption: "카드",
    couponId: 1,

    orderInfo: "주문 시 결제수단으로 환불받기",
    orderName: userData.name,
    orderPhone: userData.phone,
    orderEmail: userData.email,
  };

  useEffect(() => {
    getAddress().then((res) => {
      setDeliveryData(res.data.data[0]);
    });
    getUserDetail().then((res) => {
      console.log("asdfasdf", res);
      setUserData(res);
    });
  }, []);

  const handlePurchase = () => {
    const result = purchaseProductData.map((item) => {
      console.log("dddd", item.stockCount);
      const product = {
        stockId: item.stockId,
        stockCount: item.count,
        stockPrice: item.discountPrice,
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
          console.log(res.data);
        })
        .catch((err) => console.log(err));
        navigate('/order/completion')
    }
  };
  return (
    <>
      <div className="purchase-background">
        <ProductDeliveryAdress />
        <ProductDiscountOffer totalDiscountPrice={totalDiscountPrice} />
        <ProductPoint />
        <ProductPaymentMethod setIsChecked={setIsChecked} />
        <ProductAmountPaid totalDiscountPrice={totalDiscountPrice} />
        <ProductPaying handlePurchase={handlePurchase} />
        <ProductMyInfo />
        <ProductShippingRequest />
        <ProductDeliveryItems />
        <div className="purchase-bar" onClick={handlePurchase}>
          결제하기
        </div>
      </div>
    </>
  );
}

export default Purchase;
