import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import SearchList from "./SearchList";
import { getRecentSearch } from "../../store/apis/recent";

export default function SearchContents() {
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      getRecentSearch().then((res) => {
        setSearchData(res.data);
      });
    }
  }, []);
  return (
    <div className="searchItem">
      {searchData !== [] ? (
        <SearchList searchData={searchData} setSearchData={setSearchData} />
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
