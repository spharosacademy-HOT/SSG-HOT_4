import React, { useState } from "react";
import RecentItem from "../../components/common/widgets/itemList/RecentItem";

export default function RecentItemList() {
  const [itemList, setItemList] = useState(false);
  return (
    <div className="recentItem">
      <RecentItem />
      {/* <p className="recentNoItem">
        {itemList ? itemList : "최근 본 쇼핑정보가 없습니다."}
      </p> */}
    </div>
  );
}
