import React, { useEffect } from "react";
import { useState } from "react";

export default function RecentButton({ name, setIsChecked }) {
  const [isTrue, setIsTrue] = useState(false);
  const isClicked = () => {
    setIsTrue(!isTrue);
    if (name === "검색어") {
      setIsChecked(!isTrue);
    }
  };
  useEffect(() => {
    if (name === "상품") {
      setIsTrue(true);
    }
  }, []);
  return (
    <button className={isTrue ? "isClicked" : "default"} onClick={isClicked}>
      {name}
    </button>
  );
}
