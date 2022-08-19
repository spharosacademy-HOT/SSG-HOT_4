import React, { useRef } from "react";
import { useScroll } from "../../components/common/ui/UseScroll";
import MainTemp2 from "../main/MainTemp2";
import MainTemp3 from "../main/MainTemp3";

export default function MainBanner() {
  const { scrollY } = useScroll();
  const opaChanger = useRef();
  const range = 200;
  let height = 375;
  let offset = height / 2;
  let calc = 1 - (scrollY - offset + range) / range;

  if (calc > 1) {
    calc = 1;
  } else if (calc < 0) {
    calc = 0;
  }

  return (
    <div className="smhero_banner_wrap" style={{ paddingBottom: "375px" }}>
      <div
        id="smhero_banner"
        ref={opaChanger}
        style={{ opacity: calc }}
        className="smhero_banner"
      >
        <MainTemp2 />
        <MainTemp3 />
      </div>
    </div>
  );
}
