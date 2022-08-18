import React from "react";

export default function CartTitle({ name, info }) {
  return (
    <p className="cartTitle">
      <a href="">
        <strong>{name}</strong>
        <span>{info}</span>
      </a>
    </p>
  );
}
