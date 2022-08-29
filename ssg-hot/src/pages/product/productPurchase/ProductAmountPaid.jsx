import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { cartState } from "../../../store/atom/cartState";

function ProductAmountPaid() {
  const cartData = useRecoilValue(cartState);
  const totalPricee = useState(0);
  const totalDeliveryCost = useState(0);
  const totalDiscountPrice = useState(0);
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
          <div>+ 110,400원</div>
        </div>
      </div>
    </>
  );
}

export default ProductAmountPaid;
