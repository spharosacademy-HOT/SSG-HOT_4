import React, { Fragment } from "react";
import Title from "../../components/common/ui/title/Title";
import RecentButton from "../../components/common/widgets/button/RecentButton";

import menuDatas from "../../datas/json/recentNames.json";
export default function RecentHeader() {
  return (
    <div className="recentHeader">
      <div className="recentTitle">
        <Title name="최근 본 쇼핑정보" />
        <button className="editBtn">편집-</button>
      </div>
      <ul className="recentUl">
        {menuDatas &&
          menuDatas.map((menu) => (
            <li key={menu.id}>
              <RecentButton name={menu.name} />
            </li>
          ))}
      </ul>
    </div>
  );
}
