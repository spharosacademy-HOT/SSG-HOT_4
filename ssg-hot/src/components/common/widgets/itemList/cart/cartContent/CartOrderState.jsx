import React from "react";

export default function CartOrderState({ stock }) {
  return (
    <div className="cartItemStock">
      <div className="deadline">
        <i className="alretIcon iconBtn ty_sm"></i>
        <span>마감임박(남은수량:{stock})</span>
      </div>
    </div>
  );
}
