import React from "react";

import ssgLogo from "../../../../assets/img/svg/ssgLogo.svg";
import arrowDown from "../../../../assets/img/svg/arrowDown.svg";
export default function HomeLogo() {
  return (
    <div>
      <img
        src={ssgLogo}
        alt="쓱로고"
        style={{ height: "100%", width: "45px" }}
      />
      <img
        style={{ height: "100%", width: "61px", paddingBottom: "4px" }}
        src="https://sui.ssgcdn.com/ui/m_ssg/img/com_v2/gnb_logo_sm_v3.png"
        alt="신세계몰로고"
      />

      <img className="moreBtn" src={arrowDown} alt="" />
    </div>
  );
}
