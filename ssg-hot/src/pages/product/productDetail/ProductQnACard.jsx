import React from "react";
import ProductQnaItem from "../ProductQnaItem";

function ProductQnACard({ qaData, setQaData }) {
  return (
    <>
      {qaData &&
        qaData.map((qa) => (
          <div className="product-qna-card" key={qa.id}>
            <div>
              <ProductQnaItem data={qa} />
            </div>
          </div>
        ))}
    </>
  );
}

export default ProductQnACard;
