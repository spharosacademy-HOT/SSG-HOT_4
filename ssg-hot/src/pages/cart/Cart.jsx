import React, { useState } from "react";
import CartContents from "./cartContent/CartContents";
import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import CartNotice from "./CartNotice";
import CartToolBar from "./cartToolBar/CartToolBar";

export default function Cart() {
  const [isLogin, setIsLogin] = useState(false);
  const [isItem, setIsItem] = useState(true);

  return (
    <div className="bgGray">
      <CartHeader />
      <CartContents isLogin={isLogin} isItem={isItem} />
      <CartFooter />
      <CartNotice />
      <CartToolBar isLogin={isLogin} isItem={isItem} />
    </div>
  );
}
