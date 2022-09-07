import React from "react";

function OrderFinalAddress({ order }) {
  return (
    <ul className="mnodr_article_list" id="ordPageShpplocInfoDiv_1">
      <li className="mnodr_article_item ordPageShpplocArea fullOrdArea">
        <article className="mnodr_article mnodr_delivery_infos">
          <div className="mnodr_article_head">
            <div className="mnodr_article_headlt">
              <h2 className="mnodr_tx_tit">배송지 : {order.deliveryName}</h2>
            </div>
          </div>
          <div className="mnodr_article_cont ty_pull">
            <div className="mnodr_form_sec">
              <p className="mnodr_tx_desc">
                {`[${order.deliveryZipcode} ${order.deliveryAddress}]`}
              </p>
              <div className="mnodr_tx_wrap ty_space">
                <span className="mnodr_tx_size2 mnodr_tx_gray">
                  <span id="dispRcptpeNm_0">{order.deliveryTaker}</span>/
                  <span id="dispHpno_0">{order.deliveryPhone}</span>
                </span>
              </div>
            </div>
          </div>
        </article>
      </li>
    </ul>
  );
}
export default OrderFinalAddress;
