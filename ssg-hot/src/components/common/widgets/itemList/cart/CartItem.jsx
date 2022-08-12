import React from "react";

import cartDatas from "../../../../../datas/js/cartDatas";
import CartDesc from "./CartDesc";
import CartImg from "./CartImg";

export default function CartItem() {
  return (
    <div>
      <ul className="cartUl">
        {cartDatas &&
          cartDatas.map((item) => (
            <div className="cartUnit">
              <li
                key={item.id}
                style={{ display: "flex" }}
                className="cartItemList"
              >
                <CartImg imgUrl={item.imgUrl} />
                <CartDesc desc={item.desc} />
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
}
