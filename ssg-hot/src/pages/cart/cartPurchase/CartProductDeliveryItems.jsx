import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartPurchaseState } from "../../../store/atom/cartState";
import CartProductDeliveryItem from "./CartProductDeliveryItem";

export default function CartProductDeliveryItems() {
  const purchaseDatas = useRecoilValue(cartPurchaseState);
  console.log(purchaseDatas, "DKslfjl");
  return (
    <>
      <div className="purchase-card-box product-delivery-items">
        <div className="purchase-title-style">택배배송</div>
        {purchaseDatas &&
          purchaseDatas.map((item) => (
            <CartProductDeliveryItem
              key={item.id}
              item={item}
              product={item.stock.product}
            />
          ))}
      </div>
    </>
  );
}
