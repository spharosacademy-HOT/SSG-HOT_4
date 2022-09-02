import React from "react";
import { Link } from "react-router-dom";

export default function CartTitle({ name, info, productId }) {
  return (
    <Link to={`/product/${productId}`}>
      <p className="cartTitle" style={{ color: "black" }}>
        <strong>{name}</strong>
        <span>{info}</span>
      </p>
    </Link>
  );
}
