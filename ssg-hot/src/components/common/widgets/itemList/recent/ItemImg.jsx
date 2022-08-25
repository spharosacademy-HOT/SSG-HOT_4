import React from "react";

export default function ItemImg({ imgUrl }) {
  return (
    <div className="recentImg">
      <img src={imgUrl && imgUrl} alt="" />
    </div>
  );
}
