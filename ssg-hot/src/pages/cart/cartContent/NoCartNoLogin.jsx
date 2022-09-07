import React, { useState } from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
export default function NoCartNoLogin() {
  const [itemList, setItemList] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="cartItem">
      <div className="cartNoItem">
        <div>
          <FontAwesomeIcon
            icon={faShoppingCart}
            style={{ width: "60px", height: "60px", marginBottom: "20px" }}
          />
        </div>
        <div>{itemList ? itemList : "장바구니에 담긴 상품이 없습니다"}</div>
        <div style={{ fontSize: "15px", margin: "10px 50px" }}>
          {isLogin
            ? isLogin
            : "로그인을 하시면 담긴 상품이 있는지 바로 확인하실 수 있습니다!"}
        </div>
        <div style={{ margin: "0px 50px" }}>
          {!isLogin && (
            <Link to="/login">
              <button className="signInButton">로그인하기</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
