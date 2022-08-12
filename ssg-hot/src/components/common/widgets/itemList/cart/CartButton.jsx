import React from "react";

export default function CartButton({ isOption }) {
  return (
    <div>
      {isOption ? (
        <div
        // style={{
        //   display: "flex",
        //   justifyContent: "space-between",
        //   alignItems: "center",
        // }}
        >
          <p>옵션변경</p>
          <p>바로구매</p>
        </div>
      ) : (
      <div>바로구매</div>
      )
      }
    </div>
  );
}
