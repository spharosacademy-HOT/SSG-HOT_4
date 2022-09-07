import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function OrderNone() {
  const navigate = useNavigate();
  return (
    <div className="codr_no">
      <p className="codr_no_tx">주문내역이 없습니다.</p>
      <Button
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        쇼핑시작하기
      </Button>
    </div>
  );
}
export default OrderNone;
