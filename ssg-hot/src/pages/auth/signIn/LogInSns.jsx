import React from "react";
import {
  NAVER_AUTH_URL,
  KAKAO_AUTH_URL,
  GOOGLE_AUTH_URL,
} from "../oauth/index";
function LogInSns() {
  return (
    <ul className="cmem_sns_login" style={{ padding: "0px" }}>
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
            href={GOOGLE_AUTH_URL}
            style={{ width: "36%", margin: "auto", borderRadius: "68%" }}
          >
            <span className="sp_cmem_sns cmem_ico_apple"></span>
          </a>
        </span>
        <span className="cmem_sns_name">구글</span>
      </li>
      <li>
        <span className="ico_area">
          <span className="sp_cmem_sns cmem_ico_phone"></span>
        </span>
        <span className="cmem_sns_name">휴대폰</span>
      </li>
    </ul>
  );
}

export default LogInSns;
