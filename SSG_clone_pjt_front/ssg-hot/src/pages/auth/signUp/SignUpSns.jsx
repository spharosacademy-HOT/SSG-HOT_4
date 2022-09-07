import React from "react";
import { Link } from "react-router-dom";
import { KAKAO_AUTH_URL, GOOGLE_AUTH, NAVER_AUTH_URL } from "../oauth/index";
function SignUpSns() {
  return (
    <>
      <div className="cmem_cont"></div>
      <div className="cmem_card">
        <div className="cmem_card_tit">
          <h3>간편회원</h3>
        </div>
        <div className="cmem_cont"></div>
      </div>
      <ul
        className="cmem_sns_login"
        style={{ listStyle: "none", padding: "0" }}
      >
        <li>
          <Link
            to="/emailsignup"
            style={{ width: "36%", margin: "auto", borderRadius: "68%" }}
          >
            <span className="ico_area">
              <span className="sp_cmem_sns cmem_ico_email"></span>
            </span>
            <span className="cmem_sns_name">이메일</span>
          </Link>
        </li>
        <li>
          <span className="ico_area">
            <a
              href={NAVER_AUTH_URL}
              style={{ width: "36%", margin: "auto", borderRadius: "68%" }}
            >
              <span className="sp_cmem_sns cmem_ico_naver"></span>
            </a>
          </span>
          <span className="cmem_sns_name">네이버</span>
        </li>
        <li>
          <span className="ico_area">
            <a
              href={KAKAO_AUTH_URL}
              style={{ width: "36%", margin: "auto", borderRadius: "68%" }}
            >
              <span className="sp_cmem_sns cmem_ico_kakao"></span>
            </a>
          </span>
          <span className="cmem_sns_name">카카오</span>
        </li>
        <li>
          <span className="ico_area">
            <a
              href={GOOGLE_AUTH}
              style={{ width: "36%", margin: "auto", borderRadius: "68%" }}
            >
              <span className="sp_cmem_sns cmem_ico_apple"></span>
            </a>
          </span>
          <span className="cmem_sns_name">구글</span>
        </li>
      </ul>
    </>
  );
}

export default SignUpSns;
