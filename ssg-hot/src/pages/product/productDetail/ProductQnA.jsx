import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getQna } from "../../../store/apis/qna";
import ProductQnACard from "./ProductQnACard";

function ProductQnA({ item }) {
  let navigate = useNavigate();
  let params = useParams();

  const isLogin = localStorage.getItem("token");
  const [qaData, setQaData] = useState([]);
  const getProductQna = () => {
    getQna(params.productId).then((res) => {
      setQaData(res.data.content);
    });
  };
  useEffect(() => {
    getProductQna();
  }, []);
  console.log('ID',params.productId)
  return (
    <>
      <div className="product-qna">
        <div className="qna-header">
          <div>Q&A 문의</div>
          {isLogin ? (
            <button onClick={() => navigate(`/qna/${item.id}`)}>
              문의하기
            </button>
          ) : (
            <button onClick={() => navigate(`/login`)}>문의하기</button>
          )}
        </div>
        <hr />
        <div>
          <ProductQnACard qaData={qaData} setQaData={setQaData} productId={params.productId} />
        </div>
      </div>
    </>
  );
}

export default ProductQnA;
