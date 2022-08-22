import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
// import productDatas from "../../datas/js/productDatas";
import ProductCardFilter from "./ProductCardFIlter";
import axios from 'axios';

function ProductCardList() {
  useEffect(()=>{

    axios.get('http://10.10.10.84:8080/ssghot/product')
      .then(Response =>{
        setProductDatas(Response.data)
      })
  },[])

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
