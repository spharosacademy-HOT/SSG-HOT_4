import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSearch } from "../../../store/apis/search";
import ProductCard from "../../product/ProductCard";
import SearchFilter from "./SearchFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
export default function SearchList() {
  const [searchData, setSearchData] = useState([]);
  let params = useParams();

  useEffect(() => {
    getSearch(params.productName).then((res) => {
      console.log(res, "검색어 가져오기");
      setSearchData(res);
    });
  }, []);
  console.log(searchData);

  return (
    <>
      <SearchFilter />
      <div className="product-list">
        {searchData &&
          searchData.map((item, idx) => (
            <ProductCard item={item} key={item.id} />
          ))}
      </div>
      {(searchData === null) &
      (
        <div className="recentNoItem">
          <div>
            <FontAwesomeIcon
              icon={faCircleExclamation}
              style={{ width: "60px", height: "60px", marginBottom: "20px" }}
            />
            <p>최근검색어가 없습니다</p>
          </div>
        </div>
      )}
    </>
  );
}
