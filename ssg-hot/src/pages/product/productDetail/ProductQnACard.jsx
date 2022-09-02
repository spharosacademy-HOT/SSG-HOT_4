import React from "react";
import ProductQnaItem from "../ProductQnaItem";

function ProductQnACard({ qaData, setQaData }) {
  return (
    <>
      {qaData &&
        qaData.map((qa) => (
          <div className="product-qna-card">
            <div>
              <ProductQnaItem data={qa} key={qa.id} />
            </div>
          </div>
        ))}
    </>
  );
}

export default ProductQnACard;
