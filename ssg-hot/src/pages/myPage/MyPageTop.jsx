import React from "react";
import { useNavigate, Link } from "react-router-dom";

function MyPageTop() {
  const navigate = useNavigate();
  return (
    <div className="mcom_tit_renew  react-area" style={{ height: "50px" }}>
      <h2
        className="mcom_tit_txt clickable"
        style={{ marginBottom: "0", fontSize: "16px" }}
      >
        MY SSG
      </h2>
      <div className="mcom_tit_lft">
        <div className="btn_back clickable">
          <span
            className="sp_ctg_icon ctg_icon_back"
            onClick={() => navigate(-1)}
          >
            <span className="blind">이전 페이지</span>
          </span>
        </div>
      </div>
      <div className="mcom_tit_rgt">
        <div className="btn_cate btn_cart">
          <button
            type="button"
            className="clickable"
            onClick={() => navigate("/cart")}
          >
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

export default MyPageTop;
