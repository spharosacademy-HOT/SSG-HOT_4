import React, { useState } from "react";

export default function CartToolBarBtn() {
  return (
    <div className="mnodr_btn_area">
      <button
        className="mnodr_btn ty_line ty_m cartTracking"
        id="mnodr_btn_gift2"
        data-tracking-cd="00044_000000094_t00060"
        data-tracking-value="선물하기"
      >
        <i className="icon ty_md icon_gift" aria-hidden="true"></i>
        <span className="mnodr_txt_gift">선물하기</span>
      </button>
      <button
        type="button"
        className="mnodr_btn ty_point ty_m cartTracking"
        name="btOrdCheckbox"
        data-prom-yn=""
        data-tracking-cd="00044_000000094_t00060"
        data-tracking-value="주문하기"
      >
        <span className="mnodr_btn_tx">주문하기</span>
      </button>
    </div>
  );
}
