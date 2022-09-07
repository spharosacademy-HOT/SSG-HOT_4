import React from "react";
import { addCommas } from "../../../store/utils/useful-funtions";

function OrderFinalAccount({ order }) {
  return (
    <article className="mnodr_article fullOrdArea">
      <div className="mnodr_article_head">
        <div className="mnodr_article_headlt">
          <h2 className="mnodr_tx_tit">결제 금액</h2>
        </div>
      </div>
      <div className="mnodr_article_cont ty_pull">
        <div className="mnodr_form_sec">
          <div className="mnodr_priceitem ty_narrow">
            <dt>
              <span className="mnodr_priceitem_stit">주문금액</span>
            </dt>
            <dd>
              <span className="mnodr_tx_primary">
                <em className="ssg_price dispTotPayOrdAmt">
                  {addCommas(order.orderTotal)}
                </em>
                <span className="ssg_tx">원</span>
              </span>
            </dd>
          </div>
          <dl className="mnodr_priceitem ty_narrow">
            <dt>
              <span className="mnodr_priceitem_stit">할인금액</span>
            </dt>
            <dd>
              <span className="mnodr_tx_point">
                <em className="ssg_price dispTotDcAmt">
                  {addCommas(order.orderTotal - order.amountPaid)}
                </em>
                <span className="ssg_tx">원</span>
              </span>
            </dd>
          </dl>
          <ul className="mnodr_paydetail_sublst dispTotDcAmtDtl">
            <li className="dispTotDcAmtWithoutCrdDcArea">
              <span className="mnodr_paydetail_tx">상품할인</span>
              <span className="mnodr_paydetail_money">
                <em className="ssg_price dispTotDcAmtWithoutCrdDc">
                  {addCommas(order.orderTotal - order.amountPaid)}
                </em>
                <span className="ssg_tx">원</span>
              </span>
            </li>
            <li
              className="dispTotDcAmtWithCrdDcArea"
              style={{ display: "none" }}
            >
              <span className="mnodr_paydetail_tx">결제할인</span>
              <span className="mnodr_paydetail_money">
                - <em className="ssg_price dispTotDcAmtWithCrdDc">0</em>
                <span className="ssg_tx">원</span>
              </span>
            </li>
          </ul>
          <dl
            className="mnodr_priceitem ty_narrow paySummaryTgtPaymtDcArea"
            value="150"
            style={{ display: "none" }}
          >
            <dt>
              <span
                className="mnodr_priceitem_stit paySummarySsgpayDcTitleNm"
                value="150"
              >
                SSGPAY 최적할인
              </span>
            </dt>
            <dd>
              <span className="mnodr_tx_point">
                -{" "}
                <em
                  className="ssg_price dispTotDcAmtWithTgtPaymtDc"
                  value="150"
                >
                  0
                </em>
                <span className="ssg_tx">원</span>
              </span>
            </dd>
          </dl>
          <dl
            className="mnodr_priceitem ty_narrow paySummaryPointUseArea"
            style={{ display: "none" }}
          >
            <dt>
              <span className="mnodr_priceitem_stit">포인트 사용</span>
            </dt>
            <dd>
              <span className="mnodr_tx_point">
                - <em className="ssg_price dispTotPointUseAmt">0</em>
                <span className="ssg_tx">원</span>
              </span>
            </dd>
          </dl>
          <dl className="mnodr_priceitem ty_narrow">
            <dt>
              <span className="mnodr_priceitem_stit">배송비</span>
            </dt>
            <dd>
              <span className="mnodr_tx_primary">
                +
                <em className="ssg_price paySummaryTotOrdCstAmt">
                  {addCommas(order.deliveryPay)}
                </em>
                <span className="ssg_tx">원</span>
              </span>
            </dd>
          </dl>
          <ul
            className="mnodr_paydetail_sublst paySummaryTotOrdCstDtl"
            style={{ display: "none" }}
          >
            <li>
              <span className="mnodr_paydetail_tx">배송비</span>
              <span className="mnodr_paydetail_money">
                +<em className="ssg_price paySummaryOrdCstAmt">0</em>
                <span className="ssg_tx">원</span>
              </span>
            </li>
            <li className="paySummaryOrdCstDcArea" style={{ display: "none" }}>
              <span className="mnodr_paydetail_tx">배송비 할인</span>
              <span className="mnodr_paydetail_money">
                -<em className="ssg_price dispOrdCstTotAmt">0</em>
                <span className="ssg_tx">원</span>
              </span>
            </li>
          </ul>
          <dl
            className="mnodr_priceitem ty_narrow paySummaryIceBagArea"
            style={{ display: "none" }}
          >
            <dt>
              <span className="mnodr_priceitem_stit">알비백 보증금</span>
              <button
                type="button"
                className="mnodr_btn_info_detail modal-alert-open payTracking"
                data-pt-click="주문서|결제예정금액|알비백보증금_상세"
                data-layer-target="#_layerCoolerbag"
              >
                <i className="mnodr_ic ic_info_detail">
                  <span className="blind">알비백 보증금 안내</span>
                </i>
              </button>
            </dt>
            <dd>
              <span className="mnodr_tx_primary">
                + <em className="ssg_price paySummaryIceBagAmt">0</em>
                <span className="ssg_tx">원</span>
              </span>
            </dd>
          </dl>
          <dl className="mnodr_priceitem ty_total">
            <dt>
              <strong className="mnodr_priceitem_stit">총 결제금액</strong>
            </dt>
            <dd>
              <strong className="mnodr_tx_primary mnodr_priceitem_total v2">
                <em className="ssg_price paySummaryPayAmt paySummaryTgtPaymtAmt">
                  {addCommas(order.amountPaid)}
                </em>
                <span className="ssg_tx">원</span>
              </strong>
            </dd>
          </dl>
          <dl
            className="mnodr_priceitem ty_narrow cardDcInfoAmtDiv"
            style={{ display: "none" }}
          >
            <dt>
              <span className="mnodr_priceitem_stit">청구할인 예상금액</span>
            </dt>
            <dd>
              <span className="mnodr_tx_primary">
                <em className="ssg_price paySummaryPayCardDcAmt paySummaryTgtPaymtDmndDcAmt">
                  0
                </em>
                <span className="ssg_tx">원</span>
              </span>
            </dd>
          </dl>
          <dl
            className="mnodr_priceitem ty_narrow tgtPaymtCardDcInfoAmtDiv"
            style={{ display: "none" }}
          >
            <dt>
              <span className="mnodr_priceitem_stit">청구할인 예상금액</span>
            </dt>
            <dd>
              <span className="mnodr_tx_primary">
                <em className="ssg_price paySummaryTgtPaymtCardDcAmt">0</em>
                <span className="ssg_tx">원</span>
              </span>
            </dd>
          </dl>
        </div>
      </div>
    </article>
  );
}
export default OrderFinalAccount;
