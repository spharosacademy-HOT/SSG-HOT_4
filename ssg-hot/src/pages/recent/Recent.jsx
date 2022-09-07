import React, { useState } from "react";
// import RecentDatas from "../../datas/js/recentDatas"; // default dummy data
import RecentHeader from "./RecentHeader";
import RecentItemList from "./RecentItemList";

export default function Recent() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="bgGray">
      <RecentHeader setIsChecked={setIsChecked} />
      <RecentItemList isChecked={isChecked} />
    </div>
  );
}
