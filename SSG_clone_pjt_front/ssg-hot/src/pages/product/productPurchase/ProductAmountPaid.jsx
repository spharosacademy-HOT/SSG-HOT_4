import React from "react";

function ProductAmountPaid({ totalDiscountPrice }) {
  return (
    <>
      <div className="purchase-card-box product-amount-paid">
        <div className="purchase-title-style">결제 예정금액</div>
        <div>
          <ul>
            <li>
              <div>주문금액</div>
              {/* <div>+ {totalPricee}</div> */}
            </li>
            <li>
              <div>할인금액</div>
              {/* <div>- {totalDiscountPrice}</div> */}
            </li>
          </ul>
        </div>
        <div>
          <div>총 결제예정금액</div>
          <div>+ {totalDiscountPrice}원</div>
        </div>
      </div>
    </>
  );
}

export default ProductAmountPaid;
