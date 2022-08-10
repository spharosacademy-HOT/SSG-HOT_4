import React from "react";

export default function CardHeader({ title, desc }) {
  return (
    <div>
      <h3>{title}</h3>
      <div className="cardSub">
        <p>{desc}</p>
        <button>전체보기</button>
      </div>
    </div>
  );
}
