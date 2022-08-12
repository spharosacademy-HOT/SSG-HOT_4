import React from "react";
import CartButton from "./CartButton";
import CartName from "./CartName";
import CartPrice from "./CartPrice";

export default function CartDesc({ desc }) {
  return (
    <div>
      <CartName
        comName={desc.comName}
        name={desc.name}
        info={desc.info}
        option={desc.option}
      />
      <CartPrice
        oldPrice={desc.oldPrice}
        newPrice={desc.newPrice}
        qty={desc.qty}
      />
      <CartButton isOption={desc.isOption} />
    </div>
  );
}
