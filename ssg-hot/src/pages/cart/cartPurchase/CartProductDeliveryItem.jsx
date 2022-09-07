import React from "react";

export default function CartProductDeliveryItem({ item, product }) {
  return (
    <>
      <div className="product-delivery-item">
        <div className="delivery-item-image">
          <img src={product.titleImgUrl} alt="" />
        </div>
        <div>
          <div></div>
          <div className="purchase-info-box">{product.brandName}</div>
          <div>
            옵션 : {item.stock.optionFirst.name} {item.stock.optionSecond.name}
          </div>
          <div>
            <div>
              <div className="reguler-price">
                {product.regularPrice * item.count}원
              </div>
              <div className="pay-price">
                {product.discountPrice * item.count}원
              </div>
            </div>
            <div className="product-qty" style={{ margin: "0px 10px" }}>
              수량{item.count}개
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
