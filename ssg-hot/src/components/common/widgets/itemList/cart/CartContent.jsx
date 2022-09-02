import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../../../../../store/atom/cartState";
import CartButton from "./cartContent/CartButton";
import CartInfo from "./cartContent/CartInfo";
import CartOption from "./cartContent/CartOption";
import CartOrderState from "./cartContent/CartOrderState";
import CartTitle from "./cartContent/CartTitle";
import CartUtil from "./cartContent/CartUtil";
import UseCounter from "../../UseCounter";
import { changeCartCnt } from "../../../../../store/apis/cart";
import { Navigate } from "react-router-dom";

export default function CartContent({
  id,
  desc,
  optionFirst,
  optionSecond,
  qty,
  optionList,
  oldPrice,
  newPrice,
  idx,
}) {
  const [cartData, setCartData] = useRecoilState(cartState);
  const cartCnt = cartData[idx].count;
  const { count, start, stop, reset } = UseCounter(0, 500);

  const updateCartCnt = (id, count) => {
    changeCartCnt(id, count).then((res) => {
      console.log(res);
    });
  };
  const handleCount = (num) => {
    console.log(num, idx);
    console.log(cartData);
    const newCnt = cartData[idx].count + num;
    if (newCnt > qty) {
      alert(`최대 구매 수량은 ${qty}개 입니다.`);
      return;
    }
    if (newCnt < 1) {
      alert(`최소 구매 수량은 1개 입니다.`);
      return;
    }
    console.log(newCnt);
    setCartData(
      cartData.map((cart) =>
        cart.id === id ? { ...cart, count: newCnt } : cart
      )
    );

    if (count > 0) {
      reset();
    }
    start();
  };
  if (count == 6) {
    reset();
    stop();
    const count = cartData[idx].count;
    console.log(id, count);
    updateCartCnt(id, count);
  }

  return (
    <div className="cartContent">
      <CartInfo comName={desc.brandName} />
      <CartUtil id={id} />
      <CartTitle name={desc.name} info={desc.detail} productId={desc.id} />
      <CartOption optionFirst={optionFirst} optionSecond={optionSecond} />
      {count}
      <div className="cartItemPrice">
        <div>
          <div className="oldPrice">
            <del>
              <em style={{ fontSize: "14px" }}>{oldPrice * cartCnt}</em>
              <span className="won">{cartData.status}원</span>
            </del>
            <button type="button" className="cartBtnDetail">
              <i className="iconBtn detailBtn"></i>
            </button>
          </div>
          <div className="newPrice">
            <em>{newPrice * cartCnt}</em>
            <span className="won">원</span>
          </div>
        </div>
        <div className="cartItemQty">
          <div className="cartAmount">
            <div className="qtyValue">
              <span className="qtyText">{cartCnt}</span>
            </div>
            <button
              type="button"
              className="minusBtn"
              onClick={() => handleCount(-1)}
            >
              <i className="iconBtn minusBtnIcon"></i>
            </button>
            <button
              type="button"
              className="plusBtn"
              onClick={() => handleCount(1)}
            >
              <i className="iconBtn plusBtnIcon"></i>
            </button>
          </div>
        </div>
      </div>
      <CartOrderState qty={qty} />

      <CartButton optionList={optionList} cartId={id} productId={desc.id} />
    </div>
  );
}
