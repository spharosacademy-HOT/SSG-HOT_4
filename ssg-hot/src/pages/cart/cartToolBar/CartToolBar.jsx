import React from "react";
import CartToolBarBtn from "./CartToolBarBtn";
import CartToolBarContent from "./CartToolBarContent";
import CartToolBarFloat from "./CartToolBarFloat";

export default function CartToolBar() {
  return (
    <div className="mnodr_toolbar2 on">
      <CartToolBarFloat />

      <CartToolBarContent />

      <CartToolBarBtn />
    </div>
  );
}
