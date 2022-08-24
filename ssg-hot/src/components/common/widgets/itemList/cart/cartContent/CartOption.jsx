import React from "react";

export default function CartOption({ optionFirst, optionSecond }) {
  return (
    <>
      {!optionFirst ? (
        <span className="cartItemOption">{optionFirst}</span>
      ) : (
        ""
      )}
      {!optionSecond ? (
        <span className="cartItemOption">{optionSecond}</span>
      ) : (
        ""
      )}
    </>
  );
}
