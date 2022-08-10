import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
export default function SearchContents() {
  const [itemList, setItemList] = useState(false);
  return (
    <div className="searchItem">
      <div className="recentNoItem">
        <div>
          <FontAwesomeIcon
            icon={faCircleExclamation}
            style={{ width: "60px", height: "60px", marginBottom: "20px" }}
          />
        </div>
        {itemList ? itemList : "최근검색어가 없습니다"}
      </div>
    </div>
  );
}
