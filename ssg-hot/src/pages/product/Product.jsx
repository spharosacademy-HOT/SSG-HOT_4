import React, { useEffect, useRef, useState } from "react";
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
import { useParams } from "react-router-dom";
// import axios from "axios";
import * as Api from "../../store/apis/address";
import ProductPurchaseBar from "./productDetail/ProductPurchaseBar";
import { baseURL } from "../../store/apis/apiClient";
import { postRecent } from "../../store/apis/recent";
import { useScroll } from "../../components/common/ui/UseScroll";
import { RESPONSE } from "../auth/oauth";

function Product() {
  const param = useParams();
  const url = `${baseURL}/product/${param.productId}`;
  const [productDatas, setProductDatas] = useState([]);
  const [isWished, setIsWished] = useState(false);

  useEffect(() => {
    Api.get(`/product/${param.productId}`).then((Response) => {
      setProductDatas(Response.data);
      const productId = Response.data.id;
      setIsWished(Response.data.isWished);
      if (localStorage.getItem("token") !== null) {
        postRecent(productId).then((res) => {
          // console.log(res, productId, "최근본아이템등록");
        });
      }
    });
  }, [url]);
  console.log(productDatas, "1!!!!!!!!!!!!!");
  return (
    <>
      {productDatas && (
        <>
          <ProductMainImg productDatas={productDatas.titleImgUrl} />
          <ProductInfo productDatas={productDatas} />
          <SmileClub />
          <ProductSimpleReview reviewDatas={productDatas.reviewList} />
          <ProductEvent />
          <ProductDetailInfo />
          <ProductDetailImg imgNum={productDatas.productSubImgList} />
          <ProductReiew reviewDatas={productDatas.reviewList} />
          <ProductQnA item={productDatas} />
          <ProductGuide />
          <EventBanner />
          <ProductPurchaseBar
            stockList={productDatas.optionFirst}
            isWished={isWished}
            setIsWished={setIsWished}
          />
        </>
      )}
    </>
  );
}

export default Product;
