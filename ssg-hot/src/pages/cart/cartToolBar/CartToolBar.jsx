import React from "react";
import CartToolBarBtn from "./CartToolBarBtn";
import CartToolBarContent from "./CartToolBarContent";
import CartToolBarFloat from "./CartToolBarFloat";

export default function CartToolBar({ isItem, isLogin }) {
  return (
    <div className="mnodr_toolbar2 on">
      {isItem ? (
        <>
          <CartToolBarFloat />
          <CartToolBarContent isLogin={isLogin} />
          <CartToolBarBtn />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
