import React from "react";
import OrderFinalProductList from "./OrderFinalProductList";

function OrderFinalProduct({ order }) {
  console.log(order);
  return (
    <ul className="mnodr_article_list fullOrdArea">
      <li className="mnodr_article_item">
        <article className="mnodr_article">
          <div className="mnodr_article_head">
            <div className="mnodr_article_headlt">
              <h2 className="mnodr_tx_tit">택배배송</h2>
            </div>
          </div>
          <div className="mnodr_article_cont ty_pull">
            <div className="mnodr_form_sec">
              <div className="mnodr_unit">
                {order.orderItems &&
                  order.orderItems.map((content) => (
                    <OrderFinalProductList
                      key={content.id}
                      orderItem={content}
                    />
                  ))}
              </div>
            </div>
          </div>
        </article>
      </li>
    </ul>
  );
}
export default OrderFinalProduct;
