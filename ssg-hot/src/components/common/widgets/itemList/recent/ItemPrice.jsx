import React from "react";

export default function ItemPrice({ price }) {
  return (
    <div className="recentPrice">
      <em>{price}</em>
      <p>원</p>
    </div>
  );
}
