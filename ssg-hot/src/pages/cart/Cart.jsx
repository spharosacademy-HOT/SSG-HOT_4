import React, { useEffect, useState } from "react";
import { getMyCart } from "../../store/apis/cart";
import CartContents from "./cartContent/CartContents";
import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import CartNotice from "./CartNotice";
import CartToolBar from "./cartToolBar/CartToolBar";

export default function Cart() {
  const ACCESS_TOKEN = localStorage.getItem("token");
  const isLogin = ACCESS_TOKEN && true;
  const [isItem, setIsItem] = useState(true);

  useEffect(() => {
    getMyCart().then((res) => console.log(res, "가져오기 완료"));
  }, []);
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
