import React from "react";
import Cart2Contents from "./Cart2Contents";
import Cart2Footer from "./Cart2Footer";
import Cart2Header from "./Cart2Header";
import Cart2Notice from "./Cart2Notice";

export default function Cart2() {
  return (
    <div className="bgGray">
      <Cart2Header />
      <Cart2Contents />
      <Cart2Footer />
      <Cart2Notice />
    </div>
  );
}
