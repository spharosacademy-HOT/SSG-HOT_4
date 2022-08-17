import React from "react";
import CartPriceContent from "./CartPriceContent";
import CartToolBarToogle from "./CartToolBarToogle";

export default function CartToolBarContent() {
  return (
    <div className="mnodr_toolbar_ctn">
      <button
        type="button"
        className="mnodr_toolbar_togglebtn"
        name="appBarBtn"
      >
        <i className="icon ty_xs icon_chevron_down">
          <span className="blind">앱바 펼치기</span>
        </i>
        <i className="icon ty_xs icon_chevron_up">
          <span className="blind">앱바 닫기</span>
        </i>
      </button>
      <CartToolBarToogle />
      <CartPriceContent />
    </div>
  );
}
