import React from "react";

import cartDatas from "../../../../../datas/js/cartDatas";
import CartDeliveryHeader from "../../../../../pages/cart/cartContent/CartDeliveryHeader";
import CartContent from "./CartContent";
import CartImg from "./CartImg";
import CartSummary from "./CartSummary";

export default function CartItem() {
  return (
    <div className="cartItemTotal">
      <CartDeliveryHeader />
      <ul className="cartUl">
        {cartDatas &&
          cartDatas.map((item) => (
            <div className="cartUnit" key={item.id}>
              <li style={{ display: "flex" }} className="cartItemList">
                <CartImg imgUrl={item.imgUrl} />
                <CartContent desc={item.desc} />
              </li>
              <CartSummary
                newPrice={item.desc.newPrice}
                deliveryCost={item.desc.deliveryCost}
              />
            </div>
          ))}
      </ul>
    </div>
  );
}
