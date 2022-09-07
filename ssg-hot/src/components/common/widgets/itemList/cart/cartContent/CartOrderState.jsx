import React from "react";

export default function CartOrderState({ qty }) {
  return (
    <div className="cartItemStock">
      <div className="deadline">
        {qty < 200 ? (
          <>
            <i className="alretIcon iconBtn ty_sm"></i>
            <span>마감임박(남은수량:{qty})</span>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
