import React from "react";
import { useState } from "react";

export default function RecentButton({ name }) {
  const [isTrue, setIsTrue] = useState(false);
  const isClicked = () => {
    setIsTrue(!isTrue);
  };
  return (
    <button className={isTrue ? "isClicked" : "default"} onClick={isClicked}>
      {name}
    </button>
  );
}
