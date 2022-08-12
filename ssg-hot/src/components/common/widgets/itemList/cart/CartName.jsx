import React from "react";

export default function CartName({ comName, name, info, option }) {
  return (
    <div>
      <div>{comName}</div>
      <div>{name}</div>
      <div>{info}</div>
      <div>{option}</div>
    </div>
  );
}
