import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSearch } from "../../../store/apis/search";
import ProductCard from "../../product/ProductCard";
import SearchFilter from "./SearchFilter";

export default function SearchList() {
  const [searchData, setSearchData] = useState([]);
  let params = useParams();

  useEffect(() => {
    getSearch(params.productName).then((res) => {
      setSearchData(res);
    });
  }, []);

  return (
    <>
      {searchData.length == 0 ? (
        <div style={{ padding: "20px" }}>
          <p>
            <b>'{params.productName}' 상품이 없습니다.</b>
          </p>
          <p>단어의 철자나 띄어쓰기가 정확한지 확인해 보세요.</p>
        </div>
      ) : (
        <>
          <SearchFilter />
          <div className="product-list">
            {searchData &&
              searchData.map((item, idx) => (
                <ProductCard item={item} key={item.id} />
              ))}
          </div>
        </>
      )}
    </>
  );
}
