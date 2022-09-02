import React, { useState } from "react";
import QnaWrite from "./QnaWrite";

function QnaContent({ data, productId }) {
  const [type, setType] = useState("PRODUCT");

  const getType = (e) => {
    setType(e.target.value);
    console.log(e.target.value);
  };

  return (
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
      <dl
        className="type_area"
        style={{ padding: "10px", marginBottom: "0px" }}
      >
        <dt className="blind">
          <label htmlFor="lbQnaType">문의유형</label>
        </dt>
        <dd>
          <span style={{ paddingRight: "10px" }}>
            <input
              type="radio"
              id="QnaType1"
              name="ansWordTypeCdBtn"
              value="PRODUCT"
              title="상품문의"
              defaultChecked={true}
              onBlur={getType}
            />
            <label htmlFor="QnaType1" />
            상품문의
          </span>
          <span style={{ paddingRight: "10px" }}>
            <input
              type="radio"
              id="QnaType2"
              name="ansWordTypeCdBtn"
              value="DELIVERY"
              title="배송문의"
              onBlur={getType}
            />
            <label htmlFor="QnaType2" />
            배송문의
          </span>
          <span style={{ paddingRight: "10px" }}>
            <input
              type="radio"
              id="QnaType3"
              name="ansWordTypeCdBtn"
              value="OTHERS"
              title="기타"
              onBlur={getType}
            />
            <label htmlFor="QnaType3" />
            기타
          </span>
        </dd>
      </dl>
      <QnaWrite productId={productId} type={type} />
    </div>
  );
}

export default QnaContent;
