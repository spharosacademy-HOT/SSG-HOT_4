import React from "react";
import CartButton from "./cartContent/CartButton";
import CartInfo from "./cartContent/CartInfo";
import CartOption from "./cartContent/CartOption";
import CartOrderState from "./cartContent/CartOrderState";
import CartPrice from "./cartContent/CartPrice";
import CartTitle from "./cartContent/CartTitle";
import CartUtil from "./cartContent/CartUtil";

export default function CartContent({ desc }) {
  return (
    <div className="cartContent">
      <CartInfo comName={desc.comName} />
      <CartUtil />
      <CartTitle name={desc.name} info={desc.info} />
      <CartOption option={desc.option} isOption={desc.isOption} />
      <CartPrice
        oldPrice={desc.oldPrice}
        newPrice={desc.newPrice}
        qty={desc.qty}
      />
      <CartOrderState stock={desc.stock} />

      <CartButton isOption={desc.isOption} />
    </div>
  );
}
