import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentDate } from "../../../store/utils/useful-funtions";
import OrderDetail from "./OrderDetail";

function OrderList({ productList }) {
  const navigate = useNavigate();
  const detailHandle = (e) => {
    e.preventDefault();
    navigate("/order/detail", { state: productList.id });
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card_title">
          <div className="card_title_date">
            {getCurrentDate(productList.createdDate)}
          </div>
          <button className="card_title_detail" onClick={detailHandle}>
            주문 상세보기
          </button>
        </div>
        <ul className="product-list">
          {productList.orderItems.map((content) => (
            <OrderDetail key={content.id} orderItems={content} />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default OrderList;
