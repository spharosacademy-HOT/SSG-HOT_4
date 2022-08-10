import React from "react";

export default function FooterMenu() {
  return (
    <div>
      <div className="contentWrap">
        <ul className="contentList">
          <li id="footerLoginBtn">
            <a
              // href="javascript:mobileLogin('login');"
              className="clickable"
              data-react-tarea="푸터|로그인"
            >
              로그인
            </a>
          </li>
          <li id="footerLogoutBtn" style={{ display: "none" }}>
            <a
              // href="javascript:logout();"
              className="clickable"
              data-react-tarea="푸터|로그아웃"
            >
              로그아웃
            </a>
          </li>
          <li id="footerJoinMemberBtn" style={{}}>
            <a
              // href="#"
              className="clickable"
              data-react-tarea="푸터|회원가입"
              // onclick="appBroswer('https://member.ssg.com/m/member/join/simpleJoinIntro.ssg', 'stack'); return false;"
            >
              회원가입
            </a>
          </li>
          <li>
            <a
              // href="https://m.ssg.com/comm/app/appLink.ssg?mobilAppSvcNo=3"
              className="clickable"
              data-react-tarea="푸터|앱다운로드"
            >
              앱다운로드
            </a>
          </li>
          <li>
            <a
              // href="#"
              className="clickable"
              data-react-tarea="푸터|PC버전"
              // onclick="appBroswer('https://www.ssg.com','pc','Y'); return false;"
            >
              PC버전
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
