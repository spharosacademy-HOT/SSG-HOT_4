import React from "react";
import { addHyphen } from "../../../store/utils/useful-funtions";

function OrderFinalUser({ order }) {
  return (
    <ul className="mnodr_article_list fullOrdArea">
      <li className="mnodr_article_item">
        <article className="mnodr_article mnodr_delivery_infos">
          <div className="mnodr_article_head">
            <div className="mnodr_article_headlt">
              <h2 className="mnodr_tx_tit">주문자 정보</h2>
            </div>
          </div>
          <div className="mnodr_article_cont ty_pull">
            <div className="mnodr_form_sec">
              <div className="mnodr_form_cont">
                <dl className="mnodr_dl_desc">
                  <dt>
                    <span className="mnodr_tx_desc mnodr_tx_gray">
                      주문자명
                    </span>
                  </dt>
                  <dd>
                    <p className="mnodr_tx_desc" id="ordpeNmStr">
                      {order.orderName}
                    </p>
                  </dd>
                </dl>
                <dl className="mnodr_dl_desc">
                  <dt>
                    <span className="mnodr_tx_desc mnodr_tx_gray">연락처</span>
                  </dt>
                  <dd>
                    <p className="mnodr_tx_desc" id="ordpeHpnoStr">
                      {addHyphen(order.orderPhone)}
                    </p>
                  </dd>
                </dl>
                <dl className="mnodr_dl_desc">
                  <dt>
                    <span className="mnodr_tx_desc mnodr_tx_gray">이메일</span>
                  </dt>
                  <dd>
                    <p className="mnodr_tx_desc" id="ordpeEmailStr">
                      {order.orderEmail}
                    </p>
                  </dd>
                </dl>
                <dl className="mnodr_dl_desc">
                  <dt>
                    <span className="mnodr_tx_desc mnodr_tx_gray">
                      품절시 환불
                    </span>
                  </dt>
                  <dd>
                    <p className="mnodr_tx_desc">
                      <span id="rfdMthdStrArea">{order.orderInfo}</span>
                    </p>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </article>
      </li>
    </ul>
  );
}

export default OrderFinalUser;
