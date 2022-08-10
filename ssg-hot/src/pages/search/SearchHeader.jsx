import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function SearchHeader() {
  return (
    <div className="searchHeader">
      <FontAwesomeIcon icon={faAngleLeft} />
      <input type="text" placeholder="검색어를 입력하세요" />
      <Link to="/cart" style={{ color: "black" }}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Link>
      <Link to="/cart" style={{ color: "black" }}>
        <FontAwesomeIcon icon={faCartShopping} />
      </Link>
    </div>
  );
}
