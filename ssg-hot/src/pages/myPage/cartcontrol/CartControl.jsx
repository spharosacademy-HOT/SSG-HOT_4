import React, { useEffect } from "react";
import CommonHeader from "../../../components/layout/header/CommonHeader.jsx";
import CartControlFooter from "./CartControlFooter.jsx";
import CartControlHeader from "./CartControlHeader";

function CartControl() {
  return (
    <>
      <CommonHeader title="배송지 관리" />
      <CartControlHeader />
    </>
  );
}

export default CartControl;
