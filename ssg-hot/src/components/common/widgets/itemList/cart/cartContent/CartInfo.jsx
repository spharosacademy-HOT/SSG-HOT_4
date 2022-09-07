import React from "react";

export default function CartInfo({ comName }) {
  return (
    <div className="cartInfo">
      <span className="comText">
        <i className="sm">{comName}</i>
      </span>
    </div>
  );
}
