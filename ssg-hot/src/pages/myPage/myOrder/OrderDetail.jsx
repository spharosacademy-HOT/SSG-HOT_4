import React from "react";
import {
  addCommas,
  getCurrentDate,
} from "../../../store/utils/useful-funtions";

function OrderDetail({ orderItems }) {
  return (
    <li>
      <div className="delivery-container">
        <div className="delivery-info">{orderItems.deliveryStatus}</div>
        <div className="delivery-info">
          {getCurrentDate(orderItems.deliveryInfo)}
        </div>
      </div>
      <div className="product">
        <div className="product-image">
          <img src={orderItems.stock.product.titleImgUrl} />
        </div>
        <div className="product-imformation">
          <h4>{orderItems.stock.product.name}</h4>
          <div className="specification">
            <span> 수량</span>
            <small className="line"></small>
            <span>{orderItems.count}개</span>
          </div>
          <span>{addCommas(orderItems.price)}원</span>
        </div>
      </div>
    </li>
  );
}

export default OrderDetail;
