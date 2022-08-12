import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import searchDatas from "./../../datas/json/searchDatas.json";
import SearchList from "./SearchList";
export default function SearchContents() {
  return (
    <div className="searchItem">
      {searchDatas.length > 0 ? (
        <SearchList />
      ) : (
        <div className="recentNoItem">
          <div>
            <FontAwesomeIcon
              icon={faCircleExclamation}
              style={{ width: "60px", height: "60px", marginBottom: "20px" }}
            />
            <p>최근검색어가 없습니다</p>
          </div>
        </div>
      )}
    </div>
  );
}
