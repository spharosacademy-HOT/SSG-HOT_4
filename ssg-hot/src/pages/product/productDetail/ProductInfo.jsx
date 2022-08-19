import React from "react";

function ProductInfo({ productDatas }) {
  return (
    <>
      <div>
        <div className="product-info">
          <div className="product-store">
            <a href="/">
              <span>{productDatas.brandName}</span>
            </a>
          </div>
          <div className="product-simple-info">
            <span>{productDatas && productDatas.name}</span>
          </div>
          <div className="product-made-in">
            <span>원산지 : 상세설명참조</span>
          </div>
        </div>
        <div className="product-price">
          <div className="discount-price">
            {productDatas.regularPrice}원
          </div>
          <div>
            <div className="original-price">
              <div>
                {productDatas.discountRate}%&nbsp;
              </div>
              {productDatas.discountPrice}원{/* 중간에 점 어떻게 불러올까 */}
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
