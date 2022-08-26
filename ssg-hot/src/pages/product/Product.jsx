import React, { useEffect, useState } from "react";
import ProductDetailInfo from "./productDetail/ProductDetailInfo";
import ProductMainImg from "./productDetail/ProductMainImg";
import ProductInfo from "./productDetail/ProductInfo";
import SmileClub from "./productDetail/SmileClub";
import ProductSimpleReview from "./productDetail/ProductSimpleReview";
import ProductEvent from "./productDetail/ProductEvent";
import ProductDetailImg from "./productDetail/ProductDetailImg";
import ProductReiew from "./productDetail/ProductReview";
import ProductQnA from "./productDetail/ProductQnA";
import ProductGuide from "./productDetail/ProductGuide";
import EventBanner from "./productDetail/EventBanner";
import StoreInfo from "./productDetail/StoreInfo";

import ProductCard from "./ProductCard";
// import productDatas from "../../datas/js/productDatas";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductPurchaseBar from "./productDetail/ProductPurchaseBar";
import { baseURL } from "../../store/apis/apiClient";

function Product() {
  
  const param = useParams()
  const url = `${baseURL}/product/${param.productId}`
  const [productDatas, setProductDatas] = useState([]);

  useEffect(() => {
     axios
      .get(url)
      .then((Response) => {
        setProductDatas(Response.data);
      });
  }, [url]);

  return (
    <>
    <div className="product-head-box"></div>
    {
      productDatas && 
      <>
      <ProductMainImg productDatas={productDatas.titleImgUrl} />
      <ProductInfo productDatas={productDatas} />
      <SmileClub />
      <ProductSimpleReview reviewDatas={productDatas.reviewList} /> 
      <ProductEvent />
      <ProductDetailInfo />
      <ProductDetailImg imgNum={productDatas.productSubImgList} />
      <ProductReiew reviewDatas={productDatas.reviewList} />
      <ProductQnA />
      <ProductGuide />
      <EventBanner />
      <StoreInfo />
      <ProductPurchaseBar />
      </>

    }
      
      

      {/* 추천 상품 */}
      {/* <div>함께보면 좋은 상품</div>
      <div className="product-list">
        {productDatas && productDatas.map((item) => 
          <ProductCard item={item} key={item.id} />
        )}
      </div> */}
    </>
  );
}

export default Product;
