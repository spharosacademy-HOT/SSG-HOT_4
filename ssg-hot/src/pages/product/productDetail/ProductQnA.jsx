import React from "react";
import { useNavigate } from "react-router-dom";
import ProductQnACard from "./ProductQnACard";

function ProductQnA({ item }) {
  let navigate = useNavigate();
  const isLogin = localStorage.getItem("token");
  console.log(item, "아이템 정보");
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
          <ProductQnACard />
        </div>
      </div>
    </>
  );
}

export default ProductQnA;
