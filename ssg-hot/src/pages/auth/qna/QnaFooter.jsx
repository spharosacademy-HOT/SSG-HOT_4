import React from "react";

function QnaFooter() {
  return (
    <>
      <div className="qna_check">
        <input type="checkbox" id="lbQnaSecret" className="blind" />
        <label for="lbQnaSecret"></label>
      </div>

      <ul className="qna_notice">
        <li className="lst">
          배송, 결제, 교환/반품에 대한 문의는 고객센터 E-mail 상담을 이용해
          주세요.{" "}
          <a
            href="https://m.ssg.com/customer/main.ssg?_mpop=new;"
            className="btn_lnk"
          >
            고객센터 바로가기
          </a>
        </li>
        <li>답변은 MY SSG &gt; 상품 Q&amp;A에서 조회 가능합니다.</li>
        <li>
          상품과 관련없는 내용, 비방, 광고 등 문의와 무관한 내용의 글은 사전
          동의 없이 삭제될 수 있습니다.
        </li>
        <li>
          답변이 등록되면 SMS로 알려드립니다. (휴대폰번호 수정을 원하시면 MYSSG
          개인정보수정 메뉴에서 수정 후 신청해주시기 바랍니다.)
        </li>{" "}
      </ul>
      <div className="push_sms">
        <div className="push_num">
          <div className="inner">
            <span className="col"></span>
            <span className="cc_ellip_in selected"></span>
            <span className="sp_com sel_arrow">&nbsp;</span>

            <span className="col dash">
              -
              <select
                id="receiverPhone"
                title="휴대폰 앞자리"
                style={{ width: "48px" }}
              >
                <option value="010"> 010</option>
                <option value="011"> 011</option>
                <option value="016"> 016</option>
                <option value="017"> 017</option>
                <option value="018"> 018</option>
                <option value="019"> 019</option>
              </select>
              -
            </span>
            <span className="col">
              <input
                type="text"
                id="receiverPhone2"
                maxlength="4"
                title="휴대폰 뒷자리"
                style={{ width: "50px" }}
              />
            </span>
            <span className="col dash">-</span>
            <span className="col">
              <input
                type="text"
                id="receiverPhone3"
                maxlength="4"
                title="휴대폰 뒷자리"
                style={{ width: "50px" }}
              />
            </span>
          </div>
        </div>
      </div>

      <div className="btn_area">
        <a href="#;" className="btn_submit">
          확인
        </a>
        <a href="main;" className="btn_cancle">
          취소
        </a>
      </div>
    </>
  );
}

export default QnaFooter;
