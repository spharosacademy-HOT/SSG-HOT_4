import React from "react";
import { useNavigate } from "react-router-dom";
import * as Api from "../../../store/apis/address";
function OrderFinalCancel({ order }) {
  const navigate = useNavigate();
  const cancelHandle = async (e) => {
    e.preventDefault();
    if (window.confirm("해당 주문 내역을 취소하시겠습니까?")) {
      try {
        const deleteOrder = await Api.delete(`/orders/${order.id}`);

        if (deleteOrder.status === 204) {
          alert("주문 내역이 취소되었습니다.");
          navigate(-1);
          return;
        }
        if (!deleteOrder) {
          throw new Error(`${order}의 id가 존재하지 않습니다.`);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <article className="mnodr_article">
      <div className="mnodr_article_foot">
        <div className="mnodr_btn_area">
          <button
            type="button"
            name="processPaymtButton"
            className="mnodr_btn ty_point ty_m payTracking"
            data-pt-click="주문서|결제예정금액|결제하기"
            onClick={cancelHandle}
          >
            <span className="mnodr_btn_tx">
              <strong>취소하기</strong>
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default OrderFinalCancel;
