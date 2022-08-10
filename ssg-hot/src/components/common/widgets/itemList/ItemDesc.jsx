import React from "react";
import ItemContent from "./ItemContent";
import ItemPrice from "./ItemPrice";
import ItemTitle from "./ItemTitle";

export default function ItemDesc() {
  return (
    <div className="recentItemDesc">
      <ItemTitle />
      <ItemContent />
      <ItemPrice />
    </div>
  );
}
