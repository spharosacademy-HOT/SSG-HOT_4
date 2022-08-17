import React, { useState } from "react";
import NoCartNoLogin from "./NoCartNoLogin";
import DeliveryType from "./DeliveryType";
import CartAddress from "./CartAddress";
import UserNoItem from "./UserNoItem";
import CartBlank from "./CartBlank";
import HasCartItem from "./HasCartItem";
export default function CartContents() {
  const [isItem, setIsItem] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      {isLogin ? (
        <>
          <DeliveryType />
          <CartAddress />
          {isItem ? (
            <HasCartItem />
          ) : (
            <>
              <UserNoItem />
              <CartBlank />
            </>
          )}
        </>
      ) : (
        <>
          {isItem ? (
            <>
              <HasCartItem />
            </>
          ) : (
            <>
              {" "}
              <NoCartNoLogin />
            </>
          )}
        </>
      )}
    </div>
  );
}
