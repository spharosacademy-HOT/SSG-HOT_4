import React from "react";

function Cart2Contents() {
  return (
    <div id="m_content">
      <ul className="mnodr_tab" id="cartTab">
        <li className="on">
          <a
            href="/m/cart/dmsShpp.ssg"
            data-tracking-cd="00044_000000194_t00060"
            data-tracking-value="일반배송"
            className="cartTracking"
          >
            <span className="mnodr_tab_tx">일반배송(0)</span>
          </a>
        </li>
        <li>
          <a
            href="/m/cart/perdcShpp.ssg"
            data-tracking-cd="00044_000000194_t00060"
            data-tracking-value="정기배송"
            className="cartTracking"
          >
            <span className="mnodr_tab_tx">정기배송(0)</span>
          </a>
        </li>
        <li className="new">
          <a
            // href="javascript:void(0)"
            className="mnodr_bn mnodr_cartshare_banner layer_filter2"
            data-type="_cartshare_tutorial"
          >
            <span className="mnodr_tab_tx">함께장보기(0)</span>
          </a>
          <a
            style={{ display: "none" }}
            className="modal-alert-open"
            data-layer-target="#_cartshare_tutorial"
          ></a>
        </li>
      </ul>

      <div className="mnodr_info">
        <div className="mnodr_info_header">
          <div className="mnodr_info_row">
            <i className="mnodr_ic ic_location"></i>
            <h3 className="mnodr_info_tit">이창현</h3>
            <span className="mnodr_info_subtit">[기본배송지]</span>
          </div>
          <p className="mnodr_info_desc">
            <span className="blind">배송지 주소</span>[46274] 부산광역시 금정구
            중앙대로1763번길36-22, 301호 (부곡동)
          </p>
          <p className="mnodr_tx_desc mnodr_tx_point" id="delicoText"></p>
        </div>
        <div className="mnodr_info_contents">
          <div className="mnodr_info_btnarea">
            <button
              className="mnodr_info_btn cartTracking"
              type="button"
              name="btnReqMultShpp"
              data-tracking-cd="00044_000000195_t00060"
              data-tracking-value="여러곳으로한방에"
            >
              여러곳으로 한방에
            </button>
            <button
              type="button"
              id="changeAddressBtn"
              className="mnodr_info_btn layer_filter cartTracking"
              data-type="shpploc"
              data-tracking-cd="00044_000000195_t00060"
              data-tracking-value="배송지변경"
            >
              배송지 변경
            </button>
            <a
              style={{ display: "none" }}
              className="modal-fix-open"
              data-layer-target="#_layerChangeAddr"
              data-shpp-value="46274,1"
            />
            <a />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart2Contents;
