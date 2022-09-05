import React from "react";
import CartControlContent from "./CartControlContent";

function CartControlHeader() {
  return (
    <div className="mcom tit renew">
      <div className="mcom_tit_lft">
        <a href="#;" className="btn_back clickable">
          <span className="sp_ctg_icon ctg_icon_back">
            <span className="blind">이전 페이지</span>
          </span>
        </a>
      </div>
      <div className="mcom_tit_rgt"></div>

      <div id="m_content">
        <div className="myodr_addrwrap">
          <div className="myodr_tit">
            <i className="myodr_tit_ico"></i>
            <h3 className="myodr_tit_tx">
              [MY배송지] {sessionStorage.getItem("name")}
            </h3>
          </div>
          <div className="myodr_tab">
            <ul className="myodr_tab_list" role="tablist">
              <li role="presentation" className="on">
                <a href="#" role="tab" aria-selected="true">
                  <span className="myodr_tab_tx">MY배송지</span>
                </a>
              </li>

              <li role="presentation">
                <a
                  href="#"
                  role="tab"
                  aria-selected="false"
                  onClick={() => alert("준비 중입니다.")}
                >
                  <span className="myodr_tab_tx">함께장보기 배송지</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CartControlContent />
    </div>
  );
}

export default CartControlHeader;
