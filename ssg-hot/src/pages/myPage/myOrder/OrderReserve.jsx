import React from "react";

function OrderReserve() {
  return (
    <ul className="mnodr_tab">
      <li className="on ty2">
        <a
          href="#"
          className="orderInfoTracking"
          data-tracking-cd="00014_000000095_t00060"
          data-tracking-value="주문배송"
        >
          <span className="mnodr_tab_tx ty_deliv">주문배송</span>
        </a>
      </li>
      <li className="ty2">
        <a
          href="#"
          name="btnGoHotelOrderInfo"
          className="orderInfoTracking"
          data-tracking-cd="00014_000000095_t00060"
          data-tracking-value="호텔예약"
        >
          <span className="mnodr_tab_tx ty_hotel">호텔예약</span>
        </a>
      </li>
      <li className="ty2">
        <a
          href="#"
          name="btnGoTripOrderInfo"
          className="orderInfoTracking"
          data-tracking-cd="00014_000000095_t00060"
          data-tracking-value="항공권예약"
        >
          <span className="mnodr_tab_tx ty_air">항공권예약</span>
        </a>
      </li>
    </ul>
  );
}
export default OrderReserve;
