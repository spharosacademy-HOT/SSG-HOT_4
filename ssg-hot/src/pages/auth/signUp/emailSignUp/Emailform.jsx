import React from "react";

function Emailform() {
  return (
    <>
      <div id="m_container" className="mcom_container">
        <div className="mcom_tit_renew  react-area">
          <h2 className="mcom_tit_txt clickable">간편회원가입</h2>
          <div className="mcom_tit_lft">
            <a href="#;" className="btn_back clickable">
              <span className="sp_ctg_icon ctg_icon_back">
                <span className="blind">이전 페이지</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div id="m_content" className="cmem_ct_join">
        <div className="cmem_cont">
          <div className="cmem_row">
            <div className="cmem_term_box">
              <span className="cmem_inp_chk">
                <label for="ssgagree1" className="label_noraml" />
                (필수) SSG.COM 회원 이용약관
              </span>
              <a
                href="#;"
                className="cmem_btn cmem_btn_blkline2"
                title="새창 열림"
              >
                내용보기
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Emailform;
