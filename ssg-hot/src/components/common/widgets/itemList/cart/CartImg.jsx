import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  cartPurchaseState,
  cartShowAllState,
} from "../../../../../store/atom/cartState";

export default function CartImg({ imgUrl, item }) {
  const [showAll, setShowAll] = useRecoilState(cartShowAllState);
  const [isShow, setIsShow] = useState(false);
  const [cartPurchaseProductData, setCartPurchaseProductData] =
    useRecoilState(cartPurchaseState);

  const handleShow = () => {
    if (!isShow) {
      setCartPurchaseProductData([...cartPurchaseProductData, item]);
    } else {
      cartPurchaseProductData.map((data, idx) => {
        if (data.id == item.id) {
          var filterArr = cartPurchaseProductData.filter(function (data) {
            return data != item;
          });

          setCartPurchaseProductData(filterArr);
          return;
        }
      });
    }
    setIsShow(!isShow);
  };
  return (
    <div className="cartImg">
      <span className="cartCheck">
        <input type="checkbox" checked={isShow} onChange={handleShow} />
        {/* {showAll ? (
          <input
            type="checkbox"
            checked={showAll}
            onChange={() => {
              setShowAll(false);
              setIsShow(!isShow);
            }}
          />
        ) : (
          <input
            type="checkbox"
            checked={isShow}
            onChange={() => setIsShow(!isShow)}
          />
        )} */}
      </span>
      <span className="cartItemImg">
        <img src={imgUrl} alt="장바구니 이미지" />
      </span>
    </div>
  );
}
