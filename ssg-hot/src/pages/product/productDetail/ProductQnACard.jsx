import React from "react";
import ProductQnaItem from "../ProductQnaItem";

function ProductQnACard({ qaData, setQaData }) {

  console.log('가지나')
  console.log(qaData)
  return (
    <>
      {qaData &&
        qaData.map((qa) => (
          <div className="product-qna-card" key={qa.id}>
            <div>
              <ProductQnaItem data={qa} />
            </div>
          </div>
        )).slice(0, 4)}
    </>
  );
}

export default ProductQnACard;
