import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductCardFilter from "./ProductCardFIlter";
import { useParams } from "react-router-dom";
import * as Api from "../../store/apis/address";
import axios from "axios";
import { baseURL } from "../../store/apis/apiClient";

function ProductCardList() {
  let params = useParams();
  const [productDatas, setProductDatas] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      Api.get(`/categorym/${params.categoryMId}`).then((Response) => {
        setProductDatas(Response.data.productList);
      });
    } else {
      axios
        .get(`${baseURL}/categorym/${params.categoryMId}`)
        .then((Response) => {
          setProductDatas(Response.data.productList);
        });
    }
  }, []);

  return (
    <>
      <ProductCardFilter />
      <div className="cmft_sort_count v2" style={{ paddingTop: 0 }}>
        <div className="cmft_sort_tit">
          <div className="cmft_num">
            <strong>{productDatas.length}</strong>개의 상품이 있습니다.
          </div>
        </div>
      </div>
      <div className="product-list">
        {productDatas &&
          productDatas.map((item) => (
            <ProductCard item={item} key={item.id} isWished={item.isWished} />
          ))}
      </div>
    </>
  );
}

export default ProductCardList;
