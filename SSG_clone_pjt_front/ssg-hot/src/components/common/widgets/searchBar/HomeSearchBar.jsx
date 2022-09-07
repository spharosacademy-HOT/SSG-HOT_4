import React from "react";

import searchIcon from "../../../../assets/img/svg/seIcon.svg";
import cartLogo from "../../../../assets/img/svg/cartLogo.svg";
import { Link } from "react-router-dom";
export default function HomeSearchBar() {
  return (
    <div className="searchBox">
      <div className="inputBox">
        <Link to="/mainsearch">
          <input type="text" disabled />
          <button className="searchBtn">
            <img src={searchIcon} alt="검색도구아이콘" />
          </button>
        </Link>
      </div>
      <div className="cartBtn">
        <Link to="/cart">
          <img
            src={cartLogo}
            alt="장바구니아이콘"
            style={{ width: "24px", height: "24px" }}
          />
        </Link>
      </div>
    </div>
  );
}
