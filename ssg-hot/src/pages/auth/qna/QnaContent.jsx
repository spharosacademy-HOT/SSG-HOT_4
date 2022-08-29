import React, { useState } from "react";
import QnaWrite from "./QnaWrite";

function QnaContent({ data }) {
  const [type, setType] = useState("");
  const getType = (e) => {
    setType(e.target.value);
    console.log(e.target.value);
  };

  const [show, setShow] =useState()

  return (
    <>
      <div className="cm_qna_write">
        <div className="qna_item">
          <div className="thumb">
            <img src={data.titleImgUrl} width="70" height="70" alt="qna item" />
          </div>
          <div className="tx_info">
            <em>{data.name}</em>
            <span className="code">상품코드 : 1000401407540</span>
          </div>
        </div>
        <dl className="type_area">
          <dt className="blind">
            <label htmlFor="lbQnaType">문의유형</label>
          </dt>
          <dd>
            <span className="qna_type">
              <input
                type="radio"
                id="QnaType1"
                name="ansWordTypeCdBtn"
                value="상품문의"
                title="상품문의"
                defaultChecked={true}
                onBlur={getType}
              />
              <label htmlFor="QnaType1" />
              상품문의
            </span>
            <span className="qna_type">
              <input
                type="radio"
                id="QnaType2"
                name="ansWordTypeCdBtn"
                value="배송문의"
                title="배송문의"
                onBlur={getType}
              />
              <label htmlFor="QnaType2" />
              배송문의
            </span>
            <span className="qna_type">
              <input
                type="radio"
                id="QnaType3"
                name="ansWordTypeCdBtn"
                value="기타"
                title="기타"
                onBlur={getType}
              />
              <label htmlFor="QnaType3" />
              기타
            </span>
          </dd>
        </dl>
        <div className="qna_check">
          <input type="checkbox" id="lbQnaSecret" className="blind" />
          <label htmlFor="lbQnaSecret"></label>
        </div>
        <QnaWrite />
      </div>
    </>
  );
}


export default QnaContent;
