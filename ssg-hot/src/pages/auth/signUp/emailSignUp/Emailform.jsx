import React from "react";

function Emailform() {
  return (
    
    <> <div id="m_container" className="mcom_container" data-iframe-height="">
    <div className="mcom_tit_renew  react-area">
      <h2 className="mcom_tit_txt clickable">
        <a href="#;">간편회원가입</a>
      </h2>
      <div className="mcom_tit_lft">
        <a href="#;" className="btn_back clickable">
          <span className="sp_ctg_icon ctg_icon_back">
            <span className="blind">이전 페이지</span>
          </span>
        </a>
      </div>
      <div className="mcom_tit_rgt"></div>
    </div>
  </div>
      <div id="m_content" className="cmem_ct_join">
        <form
          id="submitForm"
          name="submitForm"
          action="/m/member/join/successEmail.ssg"/>
        <input type="hidden" name="joinSiteCds" value="40019"/>

        <div className="cmem_card_tit">
          <h3>약관동의</h3>
        </div>
        <div className="cmem_cont">
          <div className="cmem_row">
            <div className="cmem_term_box">
              <span className="cmem_inp_chk"/>
                <input
                  type="checkbox"
                  id="ssgagree1"
                  className="checkbox"
           
                />
                <div className="div_noraml"/> 
                (필수)
                <em/> SSG.COM 회원 이용약관
                <div/>
              <a
                href="#;"
                // onClick={"viewPolicy();return false;"}
                className="cmem_btn cmem_btn_blkline2"
                title="새창 열림" >
                내용보기
              </a>
            </div>
          </div>
          <div className="cmem_row">
            <div className="cmem_term_box">
              <span className="cmem_inp_chk"/> 
              <input
                type="checkbox"
                id="ssgagree2"
                className="checkbox"/>
              <div htmlFor="ssgagree2" className="div_noraml"/>
              (필수)
              <em /> SSG.COM 회원 개인정보 수집 및 이용 동의{" "}
              <a
                href="#;"
                // onClick={"window.open('/m/member/join/agreePrivacyDetail.ssg?type=privacy_email');return false;"}
                className="cmem_btn cmem_btn_blkline2"
                title="새창 열림">
                내용보기
              </a>
            </div>
          </div>
          <div className="cmem_row">
            <div className="cmem_term_box">
              <span className="cmem_inp_chk">
                <input
                  type="checkbox"
                  id="chk_age_up"
                  name="chk_age_up"
                  className="checkbox"/>
                <div htmlFor="chk_age_up" className="div_noraml"/>
                  (필수)
                  <em /> 만 14세 이상 회원입니다.{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Emailform;
