import React from "react";
import searchData from "../../datas/json/searchDatas.json";
export default function SearchList() {
  return (
    <div className="haveSearch">
      <h3 style={{ fontWeight: "bold" }}>최근검색어</h3>
      <ul>
        {searchData &&
          searchData.map((item) => (
            <li key={item.id}>
              <a>{item.text}</a>
              <button>x</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
