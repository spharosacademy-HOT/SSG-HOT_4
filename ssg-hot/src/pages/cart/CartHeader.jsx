import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CartHeader() {
  const navigate = useNavigate();
  return (
    <div className="mcom_tit_renew ty_top">
      <h2 className="mcom_tit_txt">장바구니</h2>

      <div className="mcom_tit_lft">
        <button className="btn_back" onClick={() => navigate(-1)}>
          <span
            className="sp_ctg_icon ctg_icon_back orderInfoTracking"
            data-tracking-cd="00014_000000094_t00060"
            data-tracking-value="뒤로가기"
          >
            <span className="blind">이전 페이지</span>
          </span>
        </button>
      </div>

      <div className="mcom_tit_rgt">
        <div className="btn_cate btn_search">
          <Link to="/mainsearch">
            <span
              className="sp_ctg_icon ctg_icon_search payTracking"
              data-pt-click="장바구니|GNB|검색"
            >
              <span className="blind">검색</span>
            </span>
          </Link>
        </div>
        <div className="btn_cate btn_home">
          <Link to="/">
            <span className="sp_ctg_icon ctg_icon_home">
              <span className="blind">홈</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
