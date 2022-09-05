import React, { useEffect, useState } from "react";
import { getMyCart } from "../../store/apis/cart";
import CartContents from "./cartContent/CartContents";
import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import CartNotice from "./CartNotice";
import CartToolBar from "./cartToolBar/CartToolBar";
import { useRecoilState } from "recoil";
import { cartState } from "../../store/atom/cartState";

export default function Cart() {
  const ACCESS_TOKEN = localStorage.getItem("token");
  const isLogin = ACCESS_TOKEN != null && true;
  const [cartData, setCartData] = useRecoilState(cartState);
  const [isItem, setIsItem] = useState(cartData !== {});
  // console.log(isItem, cartData, cartState, "아이템여부");

  return (
    <div className="bgGray" id="cart">
      <CartHeader />
      <CartContents isLogin={isLogin} isItem={isItem} />
      <CartFooter />
      <CartNotice />
      <CartToolBar isLogin={isLogin} isItem={isItem} />
    </div>
  );
}
