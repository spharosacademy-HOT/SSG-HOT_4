import React from "react";
import CartContents from "./CartContents";
import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import CartNotice from "./CartNotice";

export default function Cart() {
  return (
    <div className="bgGray">
      <CartHeader />
      <CartContents />
      <CartFooter />
      <CartNotice />
    </div>
  );
}
