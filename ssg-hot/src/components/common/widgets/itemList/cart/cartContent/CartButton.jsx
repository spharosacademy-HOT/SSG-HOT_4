import React from "react";

export default function CartButton({ isOption }) {
  return (
    <div className="cartButton">
      {isOption ? (
        <button type="button">
          <span>옵션변경</span>
        </button>
      ) : (
        <></>
      )}

      <button type="button">
        <span>바로구매</span>
      </button>
    </div>
  );
}
