import React from "react";
import MainBanner from "./MainBanner";
import MainMenuBar from "./MainMenuBar";

import MainContent from "./MainContent";
import MainSlider from "../../components/common/widgets/slider/MainSlider";
export default function Main() {
  return (
    <div>
      {/* <MainBanner /> */}
      {/* <MainSlider /> */}
      <MainMenuBar />
      <MainContent />
    </div>
  );
}
