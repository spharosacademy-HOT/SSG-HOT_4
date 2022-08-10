import React from "react";

function MyPageTop() {
  return (
    <>
      <div className="mcom_tit_renew  react-area">
        <h2 className="mcom_tit_txt clickable">
          <a href=" #">MY SSG</a>
        </h2>
        <div className="mcom_tit_lft">
          <div className="btn_back clickable">
            <span className="sp_ctg_icon ctg_icon_back">
              <span className="blind">이전 페이지</span>
            </span>
          </div>
        </div>
        <div className="mcom_tit_rgt">
          <div className="btn_cate btn_cart">
            <button type="button" className="clickable">
              <span className="sp_ctg_icon ctg_icon_cart">
                <span className="cmnoti_push">
                  <span className="blind" id="topCartCnt">
                    담은 상품 수
                  </span>
                </span>
              </span>
            </button>
          </div>
          <div className="btn_cate btn_home">
            <a href="/">
              <span className="sp_ctg_icon ctg_icon_home">
                <span className="blind">홈</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyPageTop;
