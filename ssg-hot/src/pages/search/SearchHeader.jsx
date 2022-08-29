import React, { useState } from "react";
import cartLogo2 from "../../assets/img/svg/cartLogo2.svg";
import searchIcon from "../../assets/img/svg/searchIcon.svg";

import { Link, useNavigate } from "react-router-dom";
export default function SearchHeader() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const onSearch = (e) => {
    e.preventDefault();
    if (search === null || search === "") {
      alert("검색어를 입력해 주세요");
    } else {
      navigate(`/search/${search}`);
    }
  };
  return (
    <form onSubmit={(e) => onSearch(e)} className="searchHeader">
      <div className="backBtn">
        <button type="button" onClick={() => navigate(-1)}></button>
      </div>

      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onChangeSearch}
      />

      <button type="submit" style={{ color: "black" }}>
        <img src={searchIcon} alt="검색아이콘" />
      </button>
      <Link to="/cart" style={{ color: "black" }}>
        <img src={cartLogo2} alt="장바구니" />
      </Link>
    </form>
  );
}
