import React from "react";

export default function CartPrice({ oldPrice, newPrice, qty }) {
  return (
    <div>
      <div>{oldPrice}</div>
      <div>{newPrice}</div>
      <div>{qty}</div>
    </div>
  );
}
