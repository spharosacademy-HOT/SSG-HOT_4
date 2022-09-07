import React from "react";

export default function CartToolBarFloat() {
  return (
    <div className="mnodr_toolbar_float">
      <div className="mnodr_toolbar_floatlt">
        <div className="mnodr_toolbar_fitem topbtn on">
          <a
            href=""
            id="cartTopBtn"
            className="floating_btn topbtn on cartTracking"
          >
            <span className="blind">TOP</span>
            <i className="icon ty_sm icon_arrow_top" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
