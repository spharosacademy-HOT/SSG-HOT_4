import React from "react";

export default function CartOption({ optionFirst, optionSecond }) {
  console.log(optionFirst[0].name, optionSecond[0].name, "123kjlsdkjfklsjldk");
  return (
    <div style={{ display: "flex" }}>
      <span className="cartItemOption"> 옵션: </span>
      {optionFirst ? (
        <span className="cartItemOption">{optionFirst[0].name} / </span>
      ) : (
        ""
      )}
      {optionSecond ? (
        <span className="cartItemOption">{optionSecond[0].name}</span>
      ) : (
        ""
      )}
    </div>
  );
}
