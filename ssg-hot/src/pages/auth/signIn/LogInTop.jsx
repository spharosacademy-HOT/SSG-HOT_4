import React from "react";

function LoginTop() {
  return (
    <>
      <div className="cgsearch cgsearch_v3">
        <div className="cgsearch_cover" id="m_sch_top">
          <div className="cgsearch_inpbox_wrap">
            <div className="cgsearch_inpbox_back">
              <button type="button">
                <span className="blind">이전으로</span>
              </button>
            </div>
            <div className="cgsearch_inpbox">
              <div className="cgsearch_inpbox_sbox">
                <input
                  id="query"
                  name="query"
                  type="text"
                  placeholder="검색어를 입력하세요."
                  autocomplete="off"
                  className="cgsearch_inpbox_inp"
                  value=""
                />
                <input type="hidden" id="query_sub" value="" />
                <input type="hidden" id="srch_site_no" value="6005" />
                <input type="hidden" id="select_site_no" value="6005" />
                <input type="hidden" id="srch_header_type" value="" />
                <input type="hidden" id="isSpcShopSrchYn" value="" />
                <input type="hidden" id="specialShopId" value="" />
                <input type="hidden" id="isModuleSrchYn" value="" />
                <input type="hidden" id="modulePropId" value="" />
                <input
                  type="hidden"
                  id="skipHeaderTopYn"
                  name="skipHeaderTopYn"
                  value="Y"
                />
                <button
                  type="button"
                  className="cgsearch_inpbox_src"
                  id="cgsearch_src"
                >
                  <span className="blind">검색</span>
                </button>
                <button
                  type="button"
                  className="cgsearch_inpbox_del"
                  id="cgsearch_del"
                  style={{ display: "none" }}
                >
                  <span className="blind">검색</span>
                </button>
              </div>
            </div>
            <div className="cgsearch_inpbox_util">
              <a
                id="mHeaderCartBtn_search"
                href="#;"
                className="cgsearch_util_mn ty_cart"
              >
                <i className="icon icon_cart">
                  <span id="mHeaderCartNm_search" className="blind">
                    장바구니
                  </span>
                </i>
                <span
                  className="cmnoti_cartshare"
                  id="cmnoti_cartshare_search"
                  style={{ display: "none" }}
                >
                  <span className="blind">함께 장보기</span>
                </span>
                <span className="cmnoti_push" id="cartCnt_search">
                  <span className="blind" id="searchCartCntSpan">
                    담은 상품 수
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="cgsearch_cover_autocomp" id="m_srh2">
            <div className="cgsearch_cover_short" id="ac_short_list"></div>
            <div className="cgsearch_cover_recomm">
              <ul className="cgsearch_recomm_keylist" id="ac_kwd_list"></ul>
            </div>
          </div>
          <div className="cgsearch_recomm_keyword" id="m_srh1">
            <div
              className="cgsearch_none_result"
              id="mbr_kwd_alert_nolist"
              style={{ display: "none" }}
            >
              <p>최근검색어가 없습니다</p>
            </div>
            <div className="cgsearch_latest_keyword" id="mbr_kwd_alert_all">
              <h3 className="cgsearch_latest_title">최근검색어</h3>
              <ul className="cgsearch_latest_keylst" id="mbr_kwd_list"></ul>
              <button
                type="button"
                className="cgsearch_delete_all"
                data-value="mbr"
              >
                검색어 전체 삭제
              </button>
            </div>
            <div className="cgsearch_recomm_tag" id="now_hot_all">
              <h3 className="cgsearch_recomm_title">추천태그</h3>
              <div className="cgsearch_recomm_container">
                <ul className="cgsearch_recomm_lst" id="now_hot_list"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ly_change ly_narae">
        <div className="tit_change">
          <h3>대체 상품</h3>
          <a href="#;" className="btn_close">
            <span className="blind">닫기</span>
          </a>
        </div>
        <div className="cont_change">
          <div className="mcom_scroll"></div>
        </div>
      </div>
    </>
  );
}

export default LoginTop;
