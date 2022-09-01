import React from "react";
import { deleteRecentSearch, getRecentSearch } from "../../store/apis/recent";
export default function SearchList({ searchData, setSearchData }) {
  const deleteSearch = (id) => {
    deleteRecentSearch(id).then((res) => {
      console.log(res, "검색어삭제");
      getRecentSearch().then((response) => {
        setSearchData(response.data);
        console.log(response, "삭제후 다시들고옴");
      });
    });
  };
  return (
    <div className="haveSearch">
      <h3 style={{ fontWeight: "bold" }}>최근검색어</h3>
      <ul>
        {searchData &&
          searchData.map((item) => (
            <li key={item.searchKeywordId}>
              <a>{item.searchKeyword}</a>
              <button onClick={() => deleteSearch(item.searchKeywordId)}>
                x
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
