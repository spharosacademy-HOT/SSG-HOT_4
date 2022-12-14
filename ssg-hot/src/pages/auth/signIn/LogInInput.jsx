import React, { useState } from "react";
import { Link } from "react-router-dom";
import { basicApiClient } from "../../../store/apis/apiClient";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function LogInInput() {
  let navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const checkUserName = (e) => {
    setUserName(e.target.value);
  };
  const checkPassword = (e) => {
    setPassword(e.target.value);
  };
  const onKeyDownEnter = (e) => {
    if (e.key === "Enter") {
      postLogin();
    }
  };
  const postLogin = async () => {
    if (userName && password) {
      const res = await basicApiClient
        .post(`/login`, {
          username: userName,
          password: password,
        })
        .then((res) => {
          // console.log(res);
          const ACCESS_TOKEN = res.data.access_token;
          const decoded = jwt_decode(ACCESS_TOKEN);

          //토큰 localStorage에 저장
          localStorage.setItem("token", ACCESS_TOKEN);

          //SessionStotage에 저장
          sessionStorage.setItem("id", decoded.id);
          sessionStorage.setItem("name", decoded.name);
          sessionStorage.setItem("username", decoded.username);

          alert(`${decoded.name}님 반갑습니다.`);

          navigate(-1);
          window.location.replace("/");
        })
        .catch((err) => {
          alert(
            "아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다."
          );
        });
    } else if (!userName) {
      alert("아이디를 입력해주세요");
      return;
    } else {
      alert("비밀번호를 입력해주세요");
      return;
    }
  };
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
                  onBlur={checkUserName}
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
                  onChange={checkPassword}
                  onKeyDown={onKeyDownEnter}
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
                type="button"
                // type="submit"
                className="cmem_btn cmem_btn_orange3"
                id="loginBtn"
                onClick={postLogin}
              >
                로그인
              </button>
            </div>
            <div className="cmem_login_support">
              <a 
              onClick={(e) => { e.preventDefault(); alert("준비 중입니다."); }}
              href="#">아이디 찾기|</a>
              <a 
              onClick={(e) => { e.preventDefault(); alert("준비 중입니다."); }}
              href="#">비밀번호 찾기|</a>
              <Link to="/signup">회원가입</Link>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default LogInInput;
