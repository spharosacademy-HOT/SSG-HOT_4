import React from "react";
import backButton from "../../../../src/assets/img/svg/backButton.svg";

function QnaHeader() {
  return (
    <div className="container">
      <div className="qnaHeader">
        <div className="mcom_tit_renew">
          <img src={backButton} alt="뒤로가기" />
          <h2 style={{ margin: "0" }}>상품 Q&A 쓰기</h2>
          <div style={{ width: "24px" }}></div>
        </div>
      </div>
    </div>
  );
}

export default QnaHeader;
