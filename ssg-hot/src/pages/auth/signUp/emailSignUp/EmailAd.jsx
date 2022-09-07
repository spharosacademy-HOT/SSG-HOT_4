import React from "react";

function EmailAd() {
  return (
    <>
      <div className="cmem_card_tit">
        <h3>광고 정보 수신 동의</h3>
      </div>
      <div className="cmem_cont">
        <div className="cmem_row">
          <div className="cmem_term_box">
            <span className="cmem_inp_chk">
              <input
                type="checkbox"
                id="infoRcvAgree"
                name="mbrAddtInfoAgreeDto.agreeYn"
                className="checkbox"
                value="Y"
              />
              <label htmlFor="infoRcvAgree">
                <strong>(선택)</strong> 서비스·이벤트 정보 제공을 위한 개인정보
                수집 및 이용 동의
              </label>
            </span>
            <a
            onClick={(e) => { e.preventDefault(); alert("준비 중입니다."); }}
              href="#"
              //   onClick={"window.open('/m/member/join/agreePrivacyDetail.ssg?type=privacy_signup_terms_scom02&t=simple');return false;"}
              title="새창열림"
              className="cmem_btn cmem_btn_blkline2"
            >
              내용보기
            </a>
            <ul className="cmem_termlst">
              <li>
                <span className="cmem_inp_chk">
                  <input
                    type="checkbox"
                    id="email"
                    name="emailRcvYn"
                    value="Y"
                  />
                  <label htmlFor="email">이메일</label>
                </span>
              </li>
              <li>
                <span className="cmem_inp_chk">
                  <input type="checkbox" id="sms" name="smsRcvYn" value="Y" />
                  <label htmlFor="sms">문자</label>
                </span>
              </li>
            </ul>
            <p className="cmem_noti">
              <em>
                광고 정보 수신동의를 하시면 상품 및 이벤트 정보를 받으실 수
                있습니다.
              </em>
            </p>
          </div>
        </div>
        <div className="cmem_row">
          <p className="cmem_noti">
            <strong>
              선택 항목에 동의하지 않더라도 SSG.COM 회원가입 및 기본 서비스를
              이용하실 수 있습니다.
            </strong>
          </p>
        </div>

        <div className="cmem_btn_area">
          <a 
          onClick={(e) => { e.preventDefault(); alert("준비 중입니다."); }}
          href="#" id="btnSubmit" className="cmem_btn cmem_btn_orange2">
            확인
          </a>
        </div>
      </div>
    </>
  );
}

export default EmailAd;
