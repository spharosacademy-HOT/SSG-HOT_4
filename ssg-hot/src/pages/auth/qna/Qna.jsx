import React, { useEffect, useState } from "react";
import CommonHeader from "../../../components/layout/header/CommonHeader";
import { getProduct } from "../../../store/apis/product";
import QnaContent from "./QnaContent";
import { useParams } from "react-router-dom";

function Qna() {
  let params = useParams();
  const [productData, setProductData] = useState({})
  const id=params.productId
  console.log(id)
  useEffect(()=>{
    getProduct(id).then((res)=>{
      setProductData(res)
      console.log(res)
    })
  },[])
 
  return (
    <>
      <CommonHeader title="상품 Q&A 쓰기" />
      <QnaContent data={productData}/>
    </>
  );
}

export default Qna;
