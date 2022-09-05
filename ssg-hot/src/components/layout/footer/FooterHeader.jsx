import React from "react";

export default function FooterHeader() {
  return (
    <div className="footerWrap">
      <div className="footerArea">
        <p className="footerInfo">
          <span className="footerMall">
            SSG.COM 고객센터 / 전자금융거래 분쟁처리
          </span>
          <br />
          <span className="footerPhone">1577-3419 /</span>{" "}
          <span className="footerEmail">ssg@ssg.com</span>
        </p>
        <div className="footerBtn">
          <a
            href="#"
            className="footerBtnArea clickable"
            data-react-tarea="푸터|전화연결"
          >
            <em>전화걸기</em>
          </a>
          <a
            href="#"
            className="footerBtnArea clickable"
            data-react-tarea="푸터|고객상담톡"
          >
            <em>1:1 고객센터</em>
          </a>
        </div>
      </div>
    </div>
  );
}
