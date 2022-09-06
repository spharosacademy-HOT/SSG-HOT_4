import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { purchaseProduct } from "../../../store/apis/product";
import { addressState } from "../../../store/atom/addressState";
import {
  cartOrderPriceState,
  cartPurchaseState,
} from "../../../store/atom/cartState";
import { userState } from "../../../store/atom/user";
import { useNavigate } from "react-router-dom";

export default function CartToolBarBtn() {
  const [cartPurchaseProductData, setCartPurchaseProductData] =
    useRecoilState(cartPurchaseState);

  const deliveryData = useRecoilValue(addressState);
  const priceData = useRecoilValue(cartOrderPriceState);
  const userData = useRecoilValue(userState);
  const navigate = useNavigate();
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
    if (cartPurchaseProductData.length > 0) {
      const result = cartPurchaseProductData.map((item) => {
        const product = {
          stockId: item.stock.id,
          stockCount: item.count,
          stockPrice: item.stock.product.discountPrice,
        };
        return product;
      });
      purchaseData.orderItems = result;
      // console.log("보낼데이터", purchaseData);
      purchaseProduct(purchaseData)
        .then((res) => {
          // console.log(res.data);
          alert("성공적으로 주문완료하였습니다.");
          navigate(`/order`);
        })
        .catch((err) => console.log(err));
    } else {
      alert("주문할 제품을 선택해주세요.");
    }
  };
  return (
    <div className="mnodr_btn_area">
      <button
        className="mnodr_btn ty_line ty_m cartTracking"
        id="mnodr_btn_gift2"
        data-tracking-cd="00044_000000094_t00060"
        data-tracking-value="선물하기"
      >
        <i className="icon ty_md icon_gift" aria-hidden="true"></i>
        <span
          className="mnodr_txt_gift"
          onClick={() => {
            alert("준비 중입니다.");
          }}
        >
          선물하기
        </span>
      </button>
      <button
        type="button"
        className="mnodr_btn ty_point ty_m cartTracking"
        name="btOrdCheckbox"
        data-tracking-value="주문하기"
        onClick={handlePurchase}
      >
        <span className="mnodr_btn_tx">주문하기</span>
      </button>
    </div>
  );
}
