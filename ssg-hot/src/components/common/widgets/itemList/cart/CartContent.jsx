import React from "react";
import cartDatas from "../../../../../datas/js/cartDatas";
import CartButton from "./cartContent/CartButton";
import CartInfo from "./cartContent/CartInfo";
import CartOrderState from "./cartContent/CartOrderState";
import CartPrice from "./cartContent/CartPrice";
import CartTitle from "./cartContent/CartTitle";
import CartUtil from "./cartContent/CartUtil";

export default function CartContent({ desc }) {
  return (
    <div>
      <CartInfo comName={desc.comName} />
      <CartUtil />
      <CartTitle name={desc.name} info={desc.info} />
      <CartPrice
        oldPrice={desc.oldPrice}
        newPrice={desc.newPrice}
        qty={desc.qty}
      />
      <CartOrderState />

      <CartButton />
    </div>
  );
}
