import React from "react";


import ProductQnACard from "./ProductQnACard";

function ProductQnA({ item }) {

  return (
    <>
      <div className="product-qna">
        <div className="qna-header">
          <div>Q&A 문의</div>
          <div>
           
          </div>
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
