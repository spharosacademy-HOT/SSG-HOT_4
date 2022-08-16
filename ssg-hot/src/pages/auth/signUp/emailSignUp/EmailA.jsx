import React from "react";

function EmailA() {
  return (
    <>
      <div id="m_content" className="cmem_ct_join">
        <div className="cmem_card_tit">
          <h3>약관동의</h3>
        </div>
        <div className="cmem_cont">
          <div className="cmem_row">
            <div className="cmem_term_box">
              <span className="cmem_inp_chk">
                <input
                  type="checkbox"
                  id="ssgagree1"
                  className="checkbox"
                  data-terms="Y"
                />
                <label for="ssgagree1" className="label_noraml">
                  (필수) SSG.COM 회원 이용약관
                </label>
              </span>
              <a
                href="https://member.ssg.com/policies/termsPopup.ssg?archive=ssg/20200228;"
                className="cmem_btn cmem_btn_blkline2"
                title="새창 열림"
              >
                내용보기
              </a>
            </div>
          </div>
          <div className="cmem_row">
            <div className="cmem_term_box">
              <span className="cmem_inp_chk">
                <input
                  type="checkbox"
                  id="ssgagree2"
                  className="checkbox"
                  data-terms="Y"
                />
                <label for="ssgagree2" className="label_noraml">
                  (필수) SSG.COM 회원 개인정보 수집 및 이용 동의
                </label>
              </span>
              <a
                href="https://member.ssg.com/m/member/join/agreePrivacyDetail.ssg?type=privacy_email;"
                className="cmem_btn cmem_btn_blkline2"
                title="새창 열림"
              >
                내용보기
              </a>
            </div>
          </div>
          <div className="cmem_row">
            <div className="cmem_term_box">
              <span className="cmem_inp_chk">
                <input
                  type="checkbox"
                  id="age_up"
                  className="checkbox"
                  data-terms="Y"
                />
                <label
                  type="checkbox"
                  label
                  for="chk_age_up"
                  className="label_noraml"
                >
                  (필수)
                  <em /> 만 14세 이상 회원입니다.{" "}
                </label>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailA;
