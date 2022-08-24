import React from "react";

export default function CartButton({ optionList }) {
  return (
    <div className="cartButton">
      {optionList ? (
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
