import React from "react";
import ProductQnaItem from "../ProductQnaItem";

function ProductQnACard({ qaData, setQaData, productId }) {

  console.log(qaData)
  console.log('ID',productId)
  return (
    <>
      {qaData.length > 0 &&
        qaData.map((qa) => (
          <div className="product-qna-card" key={qa.id}>
            <div>
              <ProductQnaItem data={qa} setQaData={setQaData} productId={productId} />
            </div>
          </div>
        )).slice(0, 4)}
    </>
  );
}

export default ProductQnACard;
