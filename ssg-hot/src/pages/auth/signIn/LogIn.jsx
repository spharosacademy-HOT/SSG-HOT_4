import React from "react";
import CommonHeader from "../../../components/layout/header/CommonHeader.jsx";
import LogInInput from "./LogInInput.jsx";
import LogInSns from "./LogInSns";
import LoginTop from "./LogInTop";

export default function LogIn() {
  return (
    <div>
      <CommonHeader title="로그인" />
      {/* <LoginTop /> */}
      <LogInInput />
      <LogInSns />
      <div>
        <a href="/m/member/nonMemberLogin.ssg" className="cmem_nomem_btn">
          <span>비회원 조회하기</span>
        </a>
      </div>
    </div>
  );
}
