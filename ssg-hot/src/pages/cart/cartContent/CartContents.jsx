import React from "react";
import NoCartNoLogin from "./NoCartNoLogin";
import DeliveryType from "./DeliveryType";
import CartAddress from "./CartAddress";
import UserNoItem from "./UserNoItem";
import CartBlank from "./CartBlank";
import HasCartItem from "./HasCartItem";
import TryLogin from "./TryLogin";
import RecommendContent from "./RecommendContent";
export default function CartContents({ isItem, isLogin }) {
  // console.log(isLogin, isItem);
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
              <RecommendContent />
            </>
          )}
        </>
      ) : (
        <>
          {isItem ? (
            <>
              <TryLogin />
              <HasCartItem />
            </>
          ) : (
            <>
              <NoCartNoLogin />
            </>
          )}
        </>
      )}
    </div>
  );
}
