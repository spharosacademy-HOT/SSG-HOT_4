import React from "react";
import MainTemp2 from "./MainTemp2";
import MainTemp3 from "./MainTemp3";

export default function MainTemp() {
  return (
    <div className="smhero_banner_wrap" style={{ paddingBottom: "375px" }}>
      <div id="smhero_banner" className="smhero_banner">
        <MainTemp2 />
        <MainTemp3 />
      </div>
    </div>
  );
}
