import React from "react";
import ItemContent from "./ItemContent";
import ItemPrice from "./ItemPrice";
import ItemTitle from "./ItemTitle";

export default function ItemDesc({ name, info, price }) {
  return (
    <div className="recentItemDesc">
      <ItemTitle name={name} />
      <ItemContent info={info} />
      <ItemPrice price={price} />
    </div>
  );
}
