import React from "react";
import MainBanner from "./MainBanner";
import MainMenuBar from "./MainMenuBar";

import MainContent from "./MainContent";
import MainTemp from "./MainTemp";
export default function Main() {
  return (
    <div id="m_container" className="mcom_container">
      <MainTemp />
      {/* <MainBanner /> */}
      <MainMenuBar />
      <MainContent />
    </div>
  );
}
