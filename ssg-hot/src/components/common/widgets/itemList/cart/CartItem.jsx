import React from "react";

import cartDatas from "../../../../../datas/js/cartDatas";
import CartContent from "./CartContent";
import CartImg from "./CartImg";

export default function CartItem() {
  return (
    <div>
      <ul className="cartUl">
        {cartDatas &&
          cartDatas.map((item) => (
            <div className="cartUnit" key={item.id}>
              <li style={{ display: "flex" }} className="cartItemList">
                <CartImg imgUrl={item.imgUrl} />
                <CartContent desc={item.desc} />
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
}
