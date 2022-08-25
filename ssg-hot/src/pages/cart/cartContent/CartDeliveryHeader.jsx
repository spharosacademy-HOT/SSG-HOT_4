import React from "react";

export default function CartDeliveryHeader() {
  return (
    <div className="cartDeliveryHeader">
      <label htmlFor=""></label>
      <span>
        <input type="checkbox" />
      </span>
      <div className="titleWrap">
        <div className="titleArea">
          <label htmlFor="">
            <h3
              style={{
                fontSize: "15px",
                color: "#222",
                fontWeight: "bold",
                margin: 0,
              }}
            >
              택배배송
            </h3>
          </label>
          <p></p>
        </div>
      </div>
    </div>
  );
}
