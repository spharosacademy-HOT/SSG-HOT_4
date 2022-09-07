import React from "react";

import RecommendItemList from "../../datas/json/recommendTag.json";
export default function RecommendList() {
  return (
    <div className="recommendItemList">
      {RecommendItemList &&
        RecommendItemList.map((item) => (
          <div key={item.id}>
            <img
              style={{ borderRadius: "50%", width: "4rem", height: "4rem" }}
              src={item.url}
              alt={item.desc}
            />
            <div style={{ marginTop: "3px" }}>#{item.tag}</div>
            <div>{item.text}</div>
          </div>
        ))}
    </div>
  );
}
