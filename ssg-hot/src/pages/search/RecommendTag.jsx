import React from "react";
import RecommendList from "./RecommendList";

export default function RecommendTag() {
  return (
    <div style={{ margin: "20px" }}>
      <p style={{ fontWeight: "bold" }}>추천태그</p>
      <RecommendList />
    </div>
  );
}
