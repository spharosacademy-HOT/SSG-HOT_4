import React from "react";

export default function CartOption({ option, IsOption }) {
  return (
    <>{!IsOption ? <span className="cartItemOption">{option}</span> : ""}</>
  );
}
