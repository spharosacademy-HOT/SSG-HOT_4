import React from "react";
import QnaWrite from "./QnaWrite";
import QnaFooter from "./QnaFooter";
function QnaContent() {
  return (<>
    <div className="cm_qna_write">
      <div className="qna_item">
        <div className="thumb">
          <img
            src="https://sitem.ssgcdn.com/40/75/40/item/1000401407540_i1_70.jpg"
            width="70"
            height="70"
            alt="qna item"
          />
        </div>
        <div className="tx_info">
          <em>변형 조직 스트라이프 뷔스티에 (T224MVT235W)</em>
          <span className="code">상품코드 : 1000401407540</span>
        </div>
      </div>
      <dl className="type_area">
        <dt className="blind">
          <label for="lbQnaType">문의유형</label>
        </dt>
        <dd>
          <span className="qna_type">
            <input
              type="radio"
              id="QnaType1"
              name="ansWordTypeCdBtn"
              value="10"
              title="상품문의"
              checked="checked"
            />
            <label for="QnaType1" />
            상품문의
          </span>
          <span className="qna_type">
            <input
              type="radio"
              id="QnaType2"
              name="ansWordTypeCdBtn"
              value="20"
              title="배송문의"
            />
            <label for="QnaType2" />
            배송문의
          </span>
          <span className="qna_type">
            <input
              type="radio"
              id="QnaType3"
              name="ansWordTypeCdBtn"
              value="30"
              title="기타"
            />
            <label for="QnaType3" />
            기타
          </span>
        </dd>
      </dl>
      <QnaWrite/>
      <QnaFooter/>
      
      
      </div>
     
    </>
  );
}

export default QnaContent;
