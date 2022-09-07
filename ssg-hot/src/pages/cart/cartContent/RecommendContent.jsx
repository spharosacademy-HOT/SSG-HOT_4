import React from "react";
import MoreItem from "./MoreItem";
import RecommendItemList from "./RecommendItemList";

export default function RecommendContent() {
  return (
    <div
      className="mnodr_buyoften v2"
      style={{ margin: 0, padding: "0 auto", backgroundColor: "#fff" }}
    >
      <RecommendItemList />
      <MoreItem />
    </div>
  );
}
