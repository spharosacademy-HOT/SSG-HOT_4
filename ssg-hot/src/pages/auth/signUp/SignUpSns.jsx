import React from "react";
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
          <a href="./emailsignup">
            <span className="ico_area">
              <span className="sp_cmem_sns cmem_ico_email"></span>
            </span>
            <span className="cmem_sns_name">이메일</span>
          </a>
        </li>
        <li>
          <a
            href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=84s2Q6ccivKnokAoyCTN&redirect_uri=https%3A%2F%2Fmember.ssg.com%2Fm%2Fsns%2Fnaver%2Fcallback.ssg%3FlinkType%3Djoin%26tokenYn%3DN%26dvicMdlNm%3DnoDvicNm&state=rherqk13ia71qkp98hbhb0n1i1;"
            // onClick="snsLogin.naver('join');"
            className="snsLogin"
            name="snsLogin"
          >
            <span className="ico_area">
              <span className="sp_cmem_sns cmem_ico_naver"></span>
            </span>
            <span className="cmem_sns_name">네이버</span>
          </a>
        </li>
        <li>
          <a
            href="#;"
            // onClick="snsLogin.kakao('join');"
            className="snsLogin"
            name="snsLogin"
          >
            <span className="ico_area">
              <span className="sp_cmem_sns cmem_ico_kakao"></span>
            </span>
            <span className="cmem_sns_name">카카오</span>
          </a>
        </li>
        <li>
          <a
            href="https://appleid.apple.com/auth/authorize?response_type=code&response_mode=form_post&client_id=com.emart.ssg.login&redirect_uri=https%3A%2F%2Fmember.ssg.com%2Fm%2Fsns%2Fapple%2Fcallback.ssg&state=linkType%3Djoin%26tokenYn%3DN%26dvicMdlNm%3DnoDvicNm&scope=name%20email;"
            // onClick="snsLogin.apple('join');"
            className="snsLogin"
            name="snsLogin"
          >
            <span className="ico_area">
              <span className="sp_cmem_sns cmem_ico_apple"></span>
            </span>
            <span className="cmem_sns_name">애플</span>
          </a>
        </li>
      </ul>
    </>
  );
}

export default SignUpSns;
