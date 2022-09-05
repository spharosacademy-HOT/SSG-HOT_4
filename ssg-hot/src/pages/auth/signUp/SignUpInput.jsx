import React from "react";

function SignUpInput() {
  return (
    <div id="m_content" className="cmem_ct_join">
      <div className="cmem_card">
        <div className="cmem_card_tit">
          <h3>신세계포인트 통합회원</h3>
        </div>
        <div className="cmem_cont ty_benefit">
          <ul className="cmem_join_benefit">
            <li>
              <span className="sp_cmem_join cmem_ico_birthday_coupon"></span>
              <span className="cmem_benefit_name">
                <span>
                  최대 20만원
                  <br />
                  생일쿠폰 제공
                </span>
              </span>
            </li>
            <li>
              <span className="sp_cmem_join cmem_ico_ssgpoint"></span>
              <span className="cmem_benefit_name">
                <span>
                  신세계포인트
                  <br />
                  적립 및 사용
                </span>
              </span>
            </li>
            <li>
              <span className="sp_cmem_join cmem_ico_event"></span>
              <span className="cmem_benefit_name">
                <span>
                  다양한 이벤트
                  <br />
                  참여 혜택
                </span>
              </span>
            </li>
          </ul>
          <div className="cmem_btn_area" style={{ margin: "30px 0" }}>
            <a href="#" className="cmem_btn cmem_btn_orange">
              통합회원가입
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpInput;
