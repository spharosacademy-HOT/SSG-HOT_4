import React from "react";
import RecentItem from "../../components/common/widgets/itemList/RecentItem";
import recentDatas from "../../datas/js/recentDatas";
export default function RecentItemList() {
  console.log(recentDatas);
  return (
    <div className="recentItem">
      {recentDatas.length > 0 ? (
        <RecentItem />
      ) : (
        <div className="recentNoItem">
          <p>최근 본 쇼핑정보가 없습니다.</p>
        </div>
      )}
    </div>
  );
}
