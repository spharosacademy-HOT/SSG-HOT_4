import React from "react";

function QnaCode({ code }) {
  return (
    <div className="qnaCode">
      <em>{code}</em>
      <p>상품코드</p>
    </div>
  );
}

export default QnaCode;
