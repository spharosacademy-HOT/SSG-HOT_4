import React from "react";
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
import productDatas from "../../datas/js/productDatas";

function Product() {
  return (
    <>
      <ProductMainImg />
      <ProductInfo />
      <SmileClub />
      <ProductSimpleReview />
      <ProductEvent />
      <ProductDetailInfo />
      <ProductDetailImg />
      <ProductReiew />
      <ProductQnA />
      <ProductGuide />
      <EventBanner />
      <StoreInfo />

      {/* 추천 상품 */}
      <div>함께보면 좋은 상품</div>
      <div className="product-list">
        {productDatas &&
          productDatas.map((item) => <ProductCard item={item} key={item.id} />)}
      </div>
    </>
  );
}

export default Product;
