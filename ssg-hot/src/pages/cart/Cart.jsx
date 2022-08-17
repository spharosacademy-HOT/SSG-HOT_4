import React from "react";
import CartContents from "./cartContent/CartContents";

import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import CartNotice from "./CartNotice";
import CartToolBar from "./cartToolBar/CartToolBar";

export default function Cart() {
  return (
    <div className="bgGray">
      <CartHeader />
      <CartContents />
      <CartFooter />
      <CartNotice />
      <CartToolBar />
    </div>
  );
}
