import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
// import productDatas from "../../datas/js/productDatas";
import ProductCardFilter from "./ProductCardFIlter";
import axios from 'axios';
import { baseURL } from "../../store/apis/apiClient";
import { useParams } from "react-router-dom";

function ProductCardList() {
  // useEffect(()=>{

  //   axios.get(baseURL + '/product')
  //     .then(Response =>{
  //       setProductDatas(Response.data)
  //     })
  // },[])
  // useEffect(()=>{
  //   axios.get(baseURL)
  // })

  let params = useParams()
  console.log(params)
  console.log('params',params.categoryId)
  console.log('params',params.categoryMid)

  const [productDatas, setProductDatas] = useState([])
  return (
    <>
      <ProductCardFilter />
      {/* <p>6,140개의 상품이 있읍니다.</p> */}
      <div className="cmft_sort_count v2">
        <div className="cmft_sort_tit">
          <div className="cmft_num">
            <strong>{productDatas.length}</strong>개의 상품이 있습니다.
          </div>
        </div>
      </div>
      <div className="product-list">
        {productDatas &&
          productDatas.map((item) =>
            <ProductCard item={item} key={item.id} />
          )}
      </div>
    </>
  );
}

export default ProductCardList;
