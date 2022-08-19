import React from "react";
import MainBanner from "./MainBanner";
import MainChange from "./MainChange";
import MainContent from "../main/MainContent";
import MainTopNav from "./MainTopNav";

export default function Main() {
  return (
    <div className="mcom_containter" id="m_containter">
      <MainBanner />
      <MainTopNav />
      <MainChange />
      <MainContent />
    </div>
  );
}
