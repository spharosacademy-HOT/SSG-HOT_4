import React from "react";

function Cart2Header() {
  return (
    <>
      <header
        id="header"
        className="reveal-left-header reveal-right-header mnodr_head_fix"
      >
        <div className="mcom_tit_renew ty_top">
          <h2 className="mcom_tit_txt">장바구니</h2>

          {/* <!-- 클레임 배송조회 팝업 호출시 아래 버튼 노출안함(default 노출) --> */}
          <div className="mcom_tit_lft">
            {/* <a href="javascript:;" 
                     className="btn_back" 
                     onClick="historyBack();"> */}
            <span
              className="sp_ctg_icon ctg_icon_back orderInfoTracking"
              data-tracking-cd="00014_000000094_t00060"
              data-tracking-value="뒤로가기"
            >
              <span className="blind">이전 페이지</span>
            </span>
            {/* </a> */}
          </div>
          {/* <!-- 클레임 배송조회 팝업 호출시 아래 버튼 노출안함(default 노출) --> */}
          <div className="mcom_tit_rgt">
            <div className="btn_cate btn_search">
              <button type="button">
                <span
                  className="sp_ctg_icon ctg_icon_search payTracking"
                  data-pt-click="장바구니|GNB|검색"
                >
                  <span className="blind">검색</span>
                </span>
              </button>
            </div>
            <div className="btn_cate btn_home">
              {/* <a> */}
              {/* id="headerHomeBtn" href="javascript:void(0);" onClick="headerGoHome();" */}

              <span className="sp_ctg_icon ctg_icon_home">
                <span className="blind">홈</span>
              </span>
              {/* </a> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Cart2Header;
