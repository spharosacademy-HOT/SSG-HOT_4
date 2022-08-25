import React from "react";
import { Link } from "react-router-dom";

export default function FooterMenu() {
  const token = localStorage.getItem("token");
  const logout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("id");
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="contentWrap">
        <ul className="contentList">
          {token ? (
            <li id="footerLogoutBtn">
              <Link to="/">
                <span onClick={logout}>로그아웃</span>
              </Link>
            </li>
          ) : (
            <li id="footerLoginBtn">
              <Link to="/login">로그인</Link>
            </li>
          )}

          <li id="footerJoinMemberBtn" style={{}}>
            <Link to="/signup">회원가입</Link>
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
