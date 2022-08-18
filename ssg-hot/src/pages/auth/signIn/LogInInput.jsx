import React from "react";
import { Link } from "react-router-dom";

function LogInInput() {
  return (
    <div id="m_content" className="ssglogin">
      <div className="cmem_login_form">
        <form>
          <fieldset>
            <div className="cmem_inp_area">
              <span className="cmem_inp_txt2">
                <label htmlFor="inp_id">
                  <span className="blind">아이디</span>
                </label>
                <input
                  type="text"
                  id="inp_id"
                  name="mbrLoginId"
                  placeholder="아이디"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  maxLength="50"
                />
                <button type="button" className="inp_clear">
                  <span className="sp_cmem_login cmem_ico_clear">
                    <span className="blind">입력내용 삭제</span>
                  </span>
                </button>
              </span>
              <span className="cmem_inp_txt2">
                <label htmlFor="inp_pw">
                  <span className="blind">비밀번호</span>
                </label>
                <input
                  type="password"
                  id="inp_pw"
                  name="password"
                  placeholder="비밀번호"
                />
                <button type="button" className="inp_clear">
                  <span className="sp_cmem_login cmem_ico_clear">
                    <span className="blind">입력내용 삭제</span>
                  </span>
                </button>
              </span>
            </div>
            <div className="cmem_login_chk">
              <span className="cmem_inp_chk type3">
                <input
                  type="checkbox"
                  id="keep_id"
                  name="chk_log"
                  value="Y"
                  // checked=""
                />
                <label htmlFor="keep_id">아이디 저장</label>
              </span>
            </div>
            <div
              className="cmem_captcha"
              id="captcha_area"
              style={{ display: "none" }}
            >
              <p className="captcha_guide">
                정보 보호를 위해 자동입력 방지문자를 입력해주세요.
              </p>
              <div className="captcha_box">
                <img src="" alt="자동입력 방지문자" title="자동입력 방지문자" />
                <button
                  type="button"
                  className="btn_refresh"
                  // onClick="Captcha.refresh();"
                >
                  <span>새로고침</span>
                </button>
              </div>
              <div className="cmem_inp_txt2">
                <label htmlFor="inp_autonot">
                  <span className="blind">자동입력 방지문자</span>
                </label>
                <input
                  type="text"
                  id="inp_autonot"
                  name="captcha_response"
                  placeholder="자동입력 방지문자"
                />
                <button type="button" className="inp_clear">
                  <span className="sp_cmem_login cmem_ico_clear">
                    <span className="blind">입력내용 삭제</span>
                  </span>
                </button>
                <span className="sp_cmem_login cmem_ico_ok"></span>
              </div>
            </div>
            <div className="cmem_btn_area">
              <button
                type="submit"
                className="cmem_btn cmem_btn_orange3"
                id="loginBtn"
              >
                로그인
              </button>
            </div>
            <div className="cmem_login_support">
              <a href="https://member.ssg.com/m/member/findIdPw.ssg">
                아이디 찾기|
              </a>
              <a href="https://member.ssg.com/m/member/findIdPw.ssg?tabType=pw">
                비밀번호 찾기|
              </a>
              <Link to="/signup">회원가입</Link>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default LogInInput;
