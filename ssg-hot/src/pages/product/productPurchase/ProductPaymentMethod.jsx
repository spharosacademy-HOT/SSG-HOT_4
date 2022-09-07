import React from "react";
import ProductPaymentCards from "./ProductPaymentCards";

function ProductPaymentMethod({ setIsChecked }) {
  return (
    <>
      <div className="purchase-card-box product-payment-method">
        <div className="purchase-title-style">결제방법</div>
        <form action="">
          <div>
            <input
              type="radio"
              id="card1"
              name="card"
              onClick={() => setIsChecked(true)}
            />
            <label htmlFor="card1">SSGPAY. 카드</label>
            <ProductPaymentCards />
          </div>
          <div>
            <input
              type="radio"
              id="card2"
              name="card"
              onClick={() => setIsChecked(true)}
            />
            <label htmlFor="card2">SSGPAY. 계좌</label>
          </div>
          <div>
            <input
              type="radio"
              id="card3"
              name="card"
              onClick={() => setIsChecked(true)}
            />
            <label htmlFor="card3">일반결제</label>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProductPaymentMethod;
