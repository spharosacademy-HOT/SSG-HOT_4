import React from "react";

function EmailInhtmlFor() {
  return (<>
   
      <div className="cmem_card_tit">
        <h3>회원정보</h3>
      </div>
      <div className="cmem_cont">
        <div className="cmem_row info">
          <dl className="cmem_ip">
            <dt>
              <span className="cmem_require">
                <span className="star" aria-hidden="true">
                  *
                </span>
                <label htmlFor="mbrLoginId">
                  <span className="blind">필수입력</span>
                </label>
              </span>
              아이디
            </dt>
            <dd>
              <div className="cmem_inpbtn_set">
                <span className="cmem_inp_txt">
                  <input
                    type="text"
                    id="mbrLoginId"
                    name="mbrLoginId"
                    title="이메일주소 입력"
                    className="input_text small"
                    
                    maxLength="50"
                    placeholder="이메일주소 입력"
                  />
                </span>
                <button
                  type="button"
                  className="cmem_btn cmem_btn_gray3"
                  id="checkDuplicateLoginIdBtn"
                >
                  중복확인
                </button>
                <input type="hidden" id="isDuplicateMbrLoginId"  />
              </div>
            </dd>
          </dl>
        </div>
        <div className="cmem_row">
          <dl className="cmem_ip">
            <dt>
              <span className="cmem_require">
                <span className="star" aria-hidden="true">
                  *
                </span>
                <label htmlFor="pwdStr">
                  <span className="blind">필수입력</span>비밀번호
                </label>
              </span>
            </dt>
            <dd>
              <div className="cmem_inp_txt">
                <input
                  type="password"
                  id="pwdStr"
                  name="pwdStr"
                  placeholder="영문, 숫자 조합 8~20자리"
                />
                <button type="button" className="inp_clear">
                  <span className="cmem_ico_clear">
                    <span className="blind">입력내용 삭제</span>
                  </span>
                </button>
                <span className="cmem_ico_ok"></span>
              </div>
              <div className="cmem_inp_txt">
                <input
                  type="password"
                  id="pwdStrConfirm"
                  name="pwdStrConfirm"
                  title="비밀번호 재확인"
                  placeholder="비밀번호 확인"
                />
                <button type="button" className="inp_clear">
                  <span className="cmem_ico_clear">
                    <span className="blind">입력내용 삭제</span>
                  </span>
                </button>
                <span className="cmem_ico_ok"></span>
              </div>
            </dd>
          </dl>
        </div>
        <div className="cmem_row">
          <dl className="cmem_ip">
            <dt>
              <span className="cmem_require">
                <span className="star" aria-hidden="true">
                  *
                </span>
                <label htmlFor="mbrNm">
                  <span className="blind">필수입력</span>이름
                </label>
              </span>
            </dt>
            <dd>
              <div className="cmem_inp_txt">
                <input type="text" id="mbrNm" name="mbrNm" />
              </div>
            </dd>
          </dl>
        </div>
        <div className="cmem_row">
          <div className="cmem_user_phone">
            <div className="cmem_ip">
              <dt>
                <span className="cmem_require"></span>
                <span className="star" aria-hidden="true">
                  *
                </span>
                <label htmlFor="mobileNoStr">휴대폰 번호</label>
              </dt>

              <div className="phone_num">
                <div className="cmem_inp_grp">
                  <span className="cmem_inp_sel v2">
                    <select
                      id="mbrCntsano"
                      name="mbrCntsMobileDto.mbrCntsano"
                      title="휴대폰 번호 앞자리"
                    >
                      <option value="010">010</option>
                      <option value="011">011</option>
                      <option value="016">016</option>
                      <option value="017">017</option>
                      <option value="018">018</option>
                      <option value="019">019</option>
                    </select>
                    <span className="sel_arr"></span>
                  </span>
                  <span className="space"></span>
                  <span className="cmem_inp_txt">
                    <input
                      type="tel"
                      id="mobileNoStr"
                      title="휴대폰 번호 뒷자리"
                      placeholder="휴대폰 뒷자리"
                    />
                  </span>
                </div>
              </div>
              <div>
                <button
                  id="btnReqOtp"
                  type="button"
                  className="cmem_btn cmem_btn_gray3"
                //   onClick={"reqOtp(); return false;"}
                  href="#;"
                >
                  인증번호 발송
                </button>
              </div>
              <div
                className="cmem_inpbtn_set otpNoWrap"
                style={{ display: "none" }}
              >
                <span className="cmem_inp_txt">
                  <input
                    id="otpNo"
                    name="otpNo"
                    type="text"
                    title="인증번호"
                    placeholder="인증번호 입력"
                  />
                </span>
                <button
                  id="resend"
                  className="cmem_btn cmem_btn_gray3"
                //   onClick={"reqOtp(); return false;"}
                  href="#;"
                >
                  재발송
                </button>
              </div>
              <span className="cmem_noti otpNoWrap" style={{ display: "none" }}>
                <em id="remainTime" className="auth_code_noti">
                  남은시간 <span>3</span>분 <span>00</span>초
                </em>
              </span>
              <div
                className="cmem_btn_area otpNoWrap"
                style={{ display: "none" }}
              >
                <ul>
                  <li>
                    <button
                      type="button"
                      className="cmem_btn cmem_btn_blkline"
                    //   onClick={"initOtp(); return false;"}
                      href="#;"
                    >
                      <span className="notranslate" />
                      취소
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="cmem_btn cmem_btn_gray"
                    //   onClick={"otpCert.chkOtp(); return false;"}
                      href="#;"
                    >
                      <span className="notranslate" />
                      확인
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}

export default EmailInhtmlFor;
