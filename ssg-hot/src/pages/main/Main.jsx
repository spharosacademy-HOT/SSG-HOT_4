import React from "react";
import MainSlider from "../../components/common/widgets/slider/MainSlider";
import Header from "../../components/layout/header/Header";
import UpContent from "./mainContent/upContent/UpContent";
import MainMenuTitle from "./MainMenuTitle";
import MainQuick from "./MainQuick";

export default function Main() {
  return (
    <div>
      <Header />
      <MainMenuTitle />
      <MainSlider />
      <UpContent />
      <MainQuick />
    </div>
  );
}
