import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postQna } from "../../../store/apis/qna";
import { getUserDetail } from "../../../store/apis/user";

function QnaFooter({ title, content, productId, type }) {
  let navigate = useNavigate();
  const [fPhone, setFPhone] = useState("");
  const [bPhone, setBPhone] = useState("");

  const writeQna = () => {
    const qnaData = {
      type: type,
      title: title,
      contents: content,
      productId: productId,
    };
    postQna(qnaData)
      .then((res) => {
        console.log(res);
        alert("신청 완료되었습니다.")
        navigate(-1)
      })
      .catch((err) => console.log(qnaData));
  };
  useEffect(() => {
    getUserDetail().then((res) => {
      const phone = res.phone;
      setFPhone(phone.substring(0, 4));
      setBPhone(phone.substring(4, 8));
    });
  }, []);
  return (
    <>
      <ul className="qna_notice" style={{ margin: "10px" }}>
        <li className="lst">
          배송, 결제, 교환/반품에 대한 문의는 고객센터 E-mail 상담을 이용해
          주세요.{" "}
          <a href="#" className="btn_lnk">
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
      <div className="push_sms" style={{ margin: "0px 10px" }}>
        <div className="push_num">
          <div className="inner">
            <span className="col"></span>
            <span className="cc_ellip_in selected"></span>

            <span className="col dash">
              <select
                id="receiverPhone"
                title="휴대폰 앞자리"
                style={{ width: "50px", height: "35px" }}
                disabled={true}
              >
                <option value="010"> 010</option>
                <option value="011"> 011</option>
                <option value="016"> 016</option>
                <option value="017"> 017</option>
                <option value="018"> 018</option>
                <option value="019"> 019</option>
              </select>
            </span>
            <span className="col dash">-</span>
            <span className="col">
              <input
                type="password"
                id="receiverPhone2"
                maxLength="4"
                title="휴대폰 뒷자리"
                style={{ width: "50px" }}
                value={fPhone}
                disabled={true}
              />
            </span>
            <span className="col dash">-</span>
            <span className="col">
              <input
                type="text"
                id="receiverPhone3"
                maxLength="4"
                title="휴대폰 뒷자리"
                style={{ width: "50px" }}
                value={bPhone}
                disabled={true}
              />
            </span>
          </div>
        </div>
      </div>

      <div className="btn_area">
        <a className="btn_submit" onClick={writeQna}>
          확인
        </a>
        <a
          className="btn_cancle"
          onClick={() => {
            alert("취소되었습니다");
            navigate(-1);
          }}
        >
          취소
        </a>
      </div>
    </>
  );
}

export default QnaFooter;
