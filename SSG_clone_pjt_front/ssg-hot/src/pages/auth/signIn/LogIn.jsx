import React from "react";
import CommonHeader from "../../../components/layout/header/CommonHeader.jsx";
import LogInInput from "./LogInInput.jsx";
import LogInSns from "./LogInSns";
import LoginTop from "./LogInTop";

export default function LogIn() {
  return (
    <div>
      <CommonHeader title="로그인" />
      <LoginTop />
      <LogInInput />
      <LogInSns />
      <div>
        <a
        onClick={(e) => { e.preventDefault(); alert("준비 중입니다."); }}
          href="#"
          className="cmem_nomemarea .cmem_nomem_btn"
          style={{
            color: "#9b9b9b",
            textAlign: "center",
            fontSize: "13px",
            lineHeight: "16px",
          }}
        >
          <p>비회원 조회하기</p>
        </a>
      </div>
    </div>
  );
}
