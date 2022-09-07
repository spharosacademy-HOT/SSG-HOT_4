import React from "react";
import CardHeader from "./CardHeader";
import LikeLogo from "../../../../assets/img/svg/likeLogo.svg";
import CartLogo from "../../../../assets/img/svg/cartLogo.svg";
export default function CardContentBottom() {
  return (
    <div>
      <CardHeader
        title="바캉스 휴가 시작 8월 빅세일 start"
        desc="신세계백화점 단 3일! 보내기 아쉬운 특가,앵콜..."
      />
      <div className="cardBottom">
        <p>30,420원~</p>
        <div className="cardIcon">
          <img src={LikeLogo} alt="좋아요" />
          <img src={CartLogo} alt="좋아요" />
        </div>
      </div>
    </div>
  );
}
