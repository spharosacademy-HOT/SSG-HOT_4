import React from "react";
import cartLogo2 from "../../assets/img/svg/cartLogo2.svg";
import searchIcon from "../../assets/img/svg/searchIcon.svg";

import { Link, useNavigate } from "react-router-dom";
export default function SearchHeader() {
  const navigate = useNavigate();
  return (
    <div className="searchHeader">
      <div className="backBtn">
        <button type="button" onClick={() => navigate(-1)}></button>
      </div>

      <input type="text" placeholder="검색어를 입력하세요" />

      <Link to="/" style={{ color: "black" }}>
        <img src={searchIcon} alt="검색아이콘" />
      </Link>
      <Link to="/cart" style={{ color: "black" }}>
        <img src={cartLogo2} alt="장바구니" />
      </Link>
    </div>
  );
}
