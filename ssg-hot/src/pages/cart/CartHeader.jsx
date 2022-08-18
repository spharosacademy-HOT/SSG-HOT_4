import React from "react";

export default function CartHeader() {
  return (
    <div class="mcom_tit_renew ty_top">
      <h2 class="mcom_tit_txt">장바구니</h2>

      <div class="mcom_tit_lft">
        <a href="javascript:;" class="btn_back" onclick="historyBack();">
          <span
            class="sp_ctg_icon ctg_icon_back orderInfoTracking"
            data-tracking-cd="00014_000000094_t00060"
            data-tracking-value="뒤로가기"
          >
            <span class="blind">이전 페이지</span>
          </span>
        </a>
      </div>

      <div class="mcom_tit_rgt">
        <div class="btn_cate btn_search">
          <button type="button">
            <span
              class="sp_ctg_icon ctg_icon_search payTracking"
              data-pt-click="장바구니|GNB|검색"
            >
              <span class="blind">검색</span>
            </span>
          </button>
        </div>
        <div class="btn_cate btn_home">
          <a
            id="headerHomeBtn"
            href="javascript:void(0);"
            onclick="headerGoHome();"
          >
            <span class="sp_ctg_icon ctg_icon_home">
              <span class="blind">홈</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
