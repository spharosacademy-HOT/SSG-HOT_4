import React, { useEffect } from "react";

import CartDeliveryHeader from "../../../../../pages/cart/cartContent/CartDeliveryHeader";
import CartContent from "./CartContent";
import CartImg from "./CartImg";
import CartSummary from "./CartSummary";

import { useRecoilState } from "recoil";
import { cartState } from "../../../../../store/atom/cartState";

export default function CartItem() {
  const [cartData, setCartData] = useRecoilState(cartState);

  console.log("여기보시오", cartData);

  return (
    <div className="cartItemTotal">
      <CartDeliveryHeader />
      <ul className="cartUl">
        {cartData &&
          cartData.map((item, idx) => (
            <div className="cartUnit" key={item.id}>
              <li style={{ display: "flex" }} className="cartItemList">
                <CartImg imgUrl={item.stock.product.titleImgUrl} />
                <CartContent
                  idx={idx}
                  id={item.id}
                  desc={item.stock.product}
                  qty={item.stock.qty}
                  optionFirst={item.optionFirst}
                  optionSecond={item.optionSecond}
                  optionList={item.optionList}
                  oldPrice={item.stock.product.regularPrice}
                  newPrice={item.stock.product.discountPrice}
                />
              </li>
              <CartSummary
                count={item.count}
                newPrice={item.stock.product.discountPrice}
                deliveryCost={item.stock.product.shippingFee}
              />
            </div>
          ))}
      </ul>
    </div>
  );
}
