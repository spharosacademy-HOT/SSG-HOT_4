import React from "react";
import { Link } from "react-router-dom";

function MyPageOrder() {
  return (
    <div className="myssg_sec">
      <div className="myssg_sec_conts" id="divMyOrderSecConts">
        <Link
          to="/order"
          className="myssg_sec_title ty_order clickable"
          data-react-tarea="MYSSG|M_MY_SSG_주문배송조회"
        >
          주문/배송 조회
        </Link>
        <div className="myssg_order_process">
          <ul className="myssg_process_list">
            <li>
              <span id="ordRcp" className="myssg_process_count ty_zero">
                0
              </span>
              <span id="ordRcpTxt" className="myssg_process_title">
                주문접수
              </span>
              <a
                href="#"
                className="myssg_process_link"
                data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_주문접수"
              >
                <span className="blind">주문접수 자세히보기</span>
              </a>
            </li>
            <li>
              <span id="paymtCmpt" className="myssg_process_count ty_zero">
                0
              </span>
              <span id="paymtCmptTxt" className="myssg_process_title">
                결제완료
              </span>
              <a
                href="#"
                className="myssg_process_link"
                data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_결제완료"
              >
                <span className="blind">결제완료 자세히보기</span>
              </a>
            </li>
            <li>
              <span id="itemReady" className="myssg_process_count ty_zero">
                0
              </span>
              <span id="itemReadyTxt" className="myssg_process_title">
                상품준비중
              </span>
              <a
                href="#"
                className="myssg_process_link"
                data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_상품준비중"
              >
                <span className="blind">상품준비중 자세히보기</span>
              </a>
            </li>
            <li>
              <span id="shpp" className="myssg_process_count ty_zero">
                0
              </span>
              <span id="shppTxt" className="myssg_process_title">
                배송중
              </span>
              <a
                href="#"
                className="myssg_process_link"
                data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_배송중"
              >
                <span className="blind">배송중 자세히보기</span>
              </a>
            </li>
            <li>
              <span id="shppCmpt" className="myssg_process_count ty_zero">
                0
              </span>
              <span id="shppCmptTxt" className="myssg_process_title">
                배송완료{" "}
                <button
                  className="myssg_question_btn myssg_modal_btn"
                  data-morph-target=".myssg_modal_completed"
                >
                  <span className="blind">베송완료란</span>
                </button>
              </span>
              <a
                href="#"
                className="myssg_process_link"
                data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_배송완료"
              >
                <span className="blind">배송완료 자세히보기</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="myssg_order_claim">
          <div className="myssg_claim_conts">
            <span className="myssg_claim_title">취소</span>
            <span className="myssg_claim_count ty_zero" id="cancelClaimCount">
              00
            </span>
            <a
              href="#"
              className="myssg_claim_link"
              data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_취소"
            >
              <span className="blind">취소 자세히보기</span>
            </a>
          </div>
          <div className="myssg_claim_conts">
            <span className="myssg_claim_title">교환</span>
            <span className="myssg_claim_count ty_zero" id="exchangeClaimCount">
              00
            </span>
            <a
              href="#"
              className="myssg_claim_link"
              data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_교환"
            >
              <span className="blind">교환 자세히보기</span>
            </a>
          </div>
          <div className="myssg_claim_conts">
            <span className="myssg_claim_title">반품</span>
            <span className="myssg_claim_count ty_zero" id="returnClaimCount">
              00
            </span>
            <a
              href="#"
              className="myssg_claim_link"
              data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_반품"
            >
              <span className="blind">반품 자세히보기</span>
            </a>
          </div>
          <div className="myssg_claim_conts">
            <span className="myssg_claim_title">
              구매확정
              <button
                className="myssg_question_btn myssg_modal_btn"
                data-morph-target=".myssg_modal_confirm"
              >
                <span className="blind">구매확정이란</span>
              </button>
            </span>
            <span className="myssg_claim_count ty_zero" id="ordPurchDcsnCnt">
              00
            </span>
            <span
              className="blind"
              data-react-tarea="MYSSG|M_MY_SSG_주문배송조회_구매확정"
            >
              구매확정 자세히보기
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPageOrder;
