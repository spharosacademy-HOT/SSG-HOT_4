import React from "react";
// import RecentDatas from "../../datas/js/recentDatas"; // default dummy data
import RecentHeader from "./RecentHeader";
import RecentItemList from "./RecentItemList";

export default function Recent() {
  
  return (
    <div className="bgGray">
      <RecentHeader />
      <RecentItemList />
    </div>
  );
}
