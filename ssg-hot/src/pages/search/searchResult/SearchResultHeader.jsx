import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SearchResultHeader() {
  let params = useParams();
  const navigate = useNavigate();

  return (
    <div className="mcom_tit_renew  react-area">
      <h2 className="mcom_tit_txt clickable">
        '<em className="point">{params.productName}</em>' 검색결과
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
      <div className="mcom_tit_rgt"></div>
    </div>
  );
}
