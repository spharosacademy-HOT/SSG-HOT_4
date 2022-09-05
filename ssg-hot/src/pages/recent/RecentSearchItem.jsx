import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteRecentSearch, getRecentSearch } from "../../store/apis/recent";

export default function RecentSearchItem({ keyword, id, setRcSearchData }) {
  const navigate = useNavigate();
  const deleteSearch = () => {
    deleteRecentSearch(id).then((res) => {
      console.log(res, "검색어삭제");
      getRecentSearch().then((response) => {
        setRcSearchData(response.data);
        console.log(response, "삭제후 다시들고옴");
      });
    });
  };
  return (
    <div style={{ backgroundColor: "#fff", margin: "8px" }}>
      <button
        onClick={deleteSearch}
        style={{
          paddingLeft: "12px",
          fontSize: "13px",
        }}
      >
        x
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "4px 20px",
        }}
      >
        <div onClick={() => navigate(`/search/${keyword}`)}>
          <div>
            <p>
              <strong>SSG.COM</strong>
            </p>

            <span>{keyword}</span>
          </div>
        </div>
        <div
          style={{
            border: "0.1px solid #888",
            padding: "2px 5px",
            borderRadius: "10px",
          }}
        >
          <strong style={{ color: "#888", fontSize: "14px" }}>검색어</strong>
        </div>
      </div>
    </div>
  );
}
