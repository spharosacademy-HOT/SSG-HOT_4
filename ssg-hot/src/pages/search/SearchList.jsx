import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteRecentSearch, getRecentSearch } from "../../store/apis/recent";
export default function SearchList({ searchData, setSearchData }) {
  const navigate = useNavigate();
  const deleteSearch = (id) => {
    deleteRecentSearch(id).then((res) => {
      getRecentSearch().then((response) => {
        setSearchData(response.data);
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
              <a
                onClick={() => {
                  navigate(`/search/${item.searchKeyword}`);
                }}
              >
                {item.searchKeyword}
              </a>
              <button onClick={() => deleteSearch(item.searchKeywordId)}>
                x
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
